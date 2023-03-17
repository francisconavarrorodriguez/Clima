import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {


  key: string = 'be665555ac9a1636a085b7a69869a89c'

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<ApiWeather>{
    return this.http.get<ApiWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key}`)
  }



}
