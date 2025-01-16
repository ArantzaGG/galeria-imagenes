import { Component } from '@angular/core';
import { UnsplashService } from './core/unsplash.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FavoritesService } from './core/favorites.service';
import { FavoriteImagesComponent } from './components/favorite-images/favorite-images.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    SearchBarComponent,
    ImageGridComponent,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    FavoriteImagesComponent,
  ],
})
export class AppComponent {
  images: any[] = [];
  currentPage: number = 1;
  currentQuery: string = '';
  currentCategory: string | null = null;
  isDarkTheme: boolean = false;
  collectionId: string = '';

  constructor(
    private unsplashService: UnsplashService,
    private favoriteService: FavoritesService
  ) {}

  ngOnInit() {
    const theme = localStorage.getItem('theme') || 'light-theme';
    this.isDarkTheme = theme === 'dark-theme';
    document.body.className = theme;
  }

  onSearch(
    event: { query: string; category: string | null },
    page: number = 1
  ) {
    this.currentQuery = event.query;
    this.currentCategory = event.category;
    this.currentPage = page;
    this.unsplashService
      .searchImages(event.query, event.category || '', page)
      .subscribe((data) => {
        this.images = data.results.map((image: any) => ({
          ...image,
          isFavorite: this.favoriteService.isFavorite(image.id),
        }));
      });
  }

  onNextPage() {
    this.currentPage++;
    this.onSearch(
      { query: this.currentQuery, category: this.currentCategory },
      this.currentPage
    );
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.onSearch(
        { query: this.currentQuery, category: this.currentCategory },
        this.currentPage
      );
    }
  }

  onRandom() {
    this.unsplashService.getRandomImages(15).subscribe((data) => {
      this.images = data;
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }

  toggleFavorite(image: any) {
    image.isFavorite = !image.isFavorite;
    if (image.isFavorite) {
      this.favoriteService.addFavorite(image);
    } else {
      this.favoriteService.removeFavorite(image.id);
    }
  }
}
