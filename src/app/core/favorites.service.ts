import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private storageKey = 'favoriteImages';

  addFavorite(image: any) {
    const favorites = this.getFavorites();
    favorites.push(image);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  removeFavorite(imageId: string) {
    let favorites = this.getFavorites();
    favorites = favorites.filter((image) => image.id !== imageId);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(imageId: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some((image) => image.id === imageId);
  }

  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }
}
