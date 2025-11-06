import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // ⭐ Estado global: última región seleccionada
  lastRegion: string = '';

  constructor(private http: HttpClient) {}

  searchCountry(country: string) {
    const url = `${API_URL}/name/${encodeURIComponent(country)}`;
    console.log('🌍 Fetching URL:', url);
    return this.http.get<any[]>(url);
  }

  searchByCapital(capital: string) {
    const url = `${API_URL}/capital/${encodeURIComponent(capital)}`;
    console.log('🌍 Fetching URL:', url);
    return this.http.get<any[]>(url);
  }

  searchByRegion(region: string) {

    // 🔥 Guardamos la última región buscada
    this.lastRegion = region;

    const url = `${API_URL}/region/${encodeURIComponent(region)}`;
    console.log('🌍 Fetching URL:', url);
    return this.http.get<any[]>(url);
  }
}
