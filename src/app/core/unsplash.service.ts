import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private apiUrl = 'https://api.unsplash.com';
  private accessKey = 'd7l-QZ9JV5-ShjuEvs-0BETI4MUI4VZmKgKmpCfY0so'; // Cambiar esto para cargar desde `environment.ts`.

  constructor(private http: HttpClient) {}

  searchImages(
    query: string,
    category: string,
    page: number = 1,
    perPage: number = 10
  ): Observable<any> {
    const searchQuery = category ? `${query} ${category}` : query;
    const url = `${this.apiUrl}/search/photos?query=${searchQuery}&page=${page}&per_page=${perPage}&client_id=${this.accessKey}`;
    return this.http.get(url);
  }

  getRandomImages(count: number): Observable<any> {
    const url = `${this.apiUrl}/photos/random?count=${count}&client_id=${this.accessKey}`;
    return this.http.get(url);
  }

  // createCollection(title: string, description: string): Observable<any> {
  //   const url = `${this.apiUrl}/collections`;
  //   return this.http.post(url, { title, description, private: true });
  // }

  // addToFavorites(photoId: string, collectionId: string): Observable<any> {
  //   const url = `${this.apiUrl}/collections/${collectionId}/add`;
  //   return this.http.post(url, { photo_id: photoId });
  // }
  // removeFromFavorites(photoId: string, collectionId: string): Observable<any> {
  //   const url = `${this.apiUrl}/collections/${collectionId}/remove`;
  //   return this.http.post(url, { photo_id: photoId });
  // }
}
