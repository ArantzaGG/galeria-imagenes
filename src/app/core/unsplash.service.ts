import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey = 'd7l-QZ9JV5-ShjuEvs-0BETI4MUI4VZmKgKmpCfY0so'; // Cambiar esto para cargar desde `environment.ts`.

  constructor(private http: HttpClient) { }

  searchImages(query: string, page: number = 1, perPage: number = 10): Observable<any> {
    const url = `${this.apiUrl}?query=${query}&page=${page}&per_page=${perPage}&client_id=${this.accessKey}`;
    return this.http.get(url);
  }
}
