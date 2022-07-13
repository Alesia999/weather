import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather.interface';
import { environment } from '../../environments/environment';
import { WeatherForecast } from '../interfaces/weather-forecast.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherByCity(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey);


    return this.http.get<Weather>(environment.apiUrl + 'weather', {
      params: options,
    });
  }
  getWeatherForecastByCity(city: string): Observable<WeatherForecast> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey)
      .set('cnt', 8);

    return this.http.get<WeatherForecast>(environment.apiUrl + 'forecast', {
      params: options,
    });
  }
}
