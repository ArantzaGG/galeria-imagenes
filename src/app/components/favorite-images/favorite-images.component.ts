import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ImageGridComponent } from '../image-grid/image-grid.component';
import { FavoritesService } from '../../core/favorites.service';

@Component({
  selector: 'app-favorite-images',
  standalone: true,
  imports: [MaterialModule, ImageGridComponent],
  templateUrl: './favorite-images.component.html',
  styleUrl: './favorite-images.component.css'
})
export class FavoriteImagesComponent implements OnInit{

favoriteImages: any[] = [];

constructor(private favoriteService: FavoritesService) {}

ngOnInit() {
  this.favoriteImages = this.favoriteService.getFavorites();
  
}
}
