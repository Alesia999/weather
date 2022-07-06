import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from './../environments/environment';
import { WeatherForecast } from './weatherForecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey);

    return this.http.get<Weather>(environment.apiUrl + 'weather', {
      params: options,
    });
  }
  getForecast(city: string): Observable<WeatherForecast> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey);

    return this.http.get<WeatherForecast>(environment.apiUrl + 'forecast', {
      params: options,
    });
  }
}
