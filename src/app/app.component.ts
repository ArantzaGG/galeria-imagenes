import { Component } from '@angular/core';
import { UnsplashService } from './core/unsplash.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, SearchBarComponent, ImageGridComponent, HttpClientModule, CommonModule, MaterialModule]
})
export class AppComponent {
  images: any[] = [];
  currentPage: number = 1;
  currentQuery: string = '';
  isDarkTheme: boolean = false;

  constructor(private unsplashService: UnsplashService) {}

  onSearch(query: string, page: number = 1) {
    this.currentQuery = query;
    this.currentPage = page;
    this.unsplashService.searchImages(query, page).subscribe((data) => {
      this.images = data.results; 
    });
  }
  onNextPage() {
    this.currentPage++;
    this.onSearch(this.currentQuery, this.currentPage);
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.onSearch(this.currentQuery, this.currentPage);
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
  }
}
