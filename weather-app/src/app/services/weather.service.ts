import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Weather, WeatherFromServer } from '../interfaces/weather.interface';
import { environment } from '../../environments/environment';
import {
  WeatherForecast,
  WeatherForecastFromServer,
} from '../interfaces/weather-forecast.interface';

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

    return this.http
      .get<WeatherFromServer>(environment.apiUrl + 'weather', {
        params: options,
      })
      .pipe(
        map((res) => {
          return {
            weatherDescription: res.weather[0].main,
            weatherImage: res.weather[0].icon,
            temperature: res.main.temp,
            windSpeed: res.wind.speed,
            cityName: res.name,
            countryCode: res.sys.country,
          };
        })
      );
  }
  getWeatherForecastByCity(city: string): Observable<WeatherForecast> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey)
      .set('cnt', 8);

    return this.http
      .get<WeatherForecastFromServer>(environment.apiUrl + 'forecast', {
        params: options,
      })
      .pipe(
        map((res) => {
          return {
            forecastList: res.list.map((item) => {
              return {
                forecastDate: item.dt_txt,
                temperature: item.main.temp,
                forecastDescription: item.weather[0].main,
                forecastImage: item.weather[0].icon,
              };
            }),
          };
        })
      );
  }
}
