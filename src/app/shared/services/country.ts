import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  lastRegion: string = '';

  constructor(private http: HttpClient) {}

  searchCountry(country: string) : Observable<Country[]> {
    const url = `${API_URL}/name/${encodeURIComponent(country)}`;
    console.log('Fetching URL:', url);
    return this.http.get<Country[]>(url);
  }

  searchByCapital(capital: string) : Observable<Country[]>{
    const url = `${API_URL}/capital/${encodeURIComponent(capital)}`;
    console.log('Fetching URL:', url);
    return this.http.get<Country[]>(url);
  }

  searchByRegion(region: string) : Observable<Country[]>{

    this.lastRegion = region;

    const url = `${API_URL}/region/${encodeURIComponent(region)}`;
    console.log('Fetching URL:', url);
    return this.http.get<Country[]>(url);
  }
}
