import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Weather } from '../models/weather.interface';
import { environment } from '../../environments/environment';
import { WeatherForecast } from '../models/weather-forecast.type';
import { OpenWeatherAPI } from './open-weather-api';
import { WeatherForecastByCityParams } from '../models/weather-forecast-by-city-params.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  getCurrentWeatherByCity(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey);

    return this.http
      .get<OpenWeatherAPI.Weather>(environment.apiUrl + 'weather', {
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

  getWeatherForecastByCity({
    city,
    forecastItemsCount,
  }: WeatherForecastByCityParams): Observable<WeatherForecast> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey)
      .set('cnt', forecastItemsCount);

    return this.http
      .get<OpenWeatherAPI.WeatherForecast>(environment.apiUrl + 'forecast', {
        params,
      })
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
