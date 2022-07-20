import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from '../../interfaces/weather.interface';
import { WeatherForecast } from 'src/app/interfaces/weather-forecast.interface';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  private static readonly FORECAST_ITEMS_COUNT = 8;
  @Input() city!: string;
  weather!: Weather;
  forecast!: WeatherForecast;
  isForecastVisible: boolean = false;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentWeatherByCity(this.city);
    this.getWeatherForecastByCity(this.city);
  }

  getCurrentWeatherByCity(city: string) {
    this.weatherService
      .getCurrentWeatherByCity(city)
      .subscribe((weather) => (this.weather = weather));
  }

  getWeatherForecastByCity(city: string) {
    this.weatherService
      .getWeatherForecastByCity({
        city,
        forecastItemsCount: CityComponent.FORECAST_ITEMS_COUNT,
      })
      .subscribe((forecast) => (this.forecast = forecast));
  }

  toggleForecastVisibility() {
    this.isForecastVisible = !this.isForecastVisible;
  }
}
