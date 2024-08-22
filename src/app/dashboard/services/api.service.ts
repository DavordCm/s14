import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://tu-api-url.com/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getAreas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/areas`);
  }

  addArea(area: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/areas`, area);
  }

  updateArea(id: number, area: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/areas/${id}`, area);
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/areas/${id}`);
  }
}
