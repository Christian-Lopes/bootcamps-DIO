import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListAnimalService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
