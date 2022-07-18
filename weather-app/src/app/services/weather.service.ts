import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Weather } from '../interfaces/weather.interface';
import { environment } from '../../environments/environment';
import { WeatherForecast } from '../interfaces/weather-forecast.interface';
import { OpenWeatherAPI } from './openweather-api';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  CNT = 8;

  constructor(private http: HttpClient) {}

  getCurrentWeatherByCity(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey);

    return this.http
      .get<OpenWeatherAPI.WeatherFromServer>(environment.apiUrl + 'weather', {
        params,
      })
      .pipe(
        map((res) => ({
          weatherDescription: res.weather[0].main,
          weatherImage: res.weather[0].icon,
          temperature: res.main.temp,
          windSpeed: res.wind.speed,
          cityName: res.name,
          countryCode: res.sys.country,
        }))
      );
  }
  getWeatherForecastByCity(city: string): Observable<WeatherForecast> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey)
      .set('cnt', this.CNT);

    return this.http
      .get<OpenWeatherAPI.WeatherForecastFromServer>(
        environment.apiUrl + 'forecast',
        { params }
      )
      .pipe(
        map((res) => {
          return res.list.map((item) => ({
            forecastDate: item.dt_txt,
            temperature: item.main.temp,
            forecastDescription: item.weather[0].main,
            forecastImage: item.weather[0].icon,
          }));
        })
      );
  }
}
