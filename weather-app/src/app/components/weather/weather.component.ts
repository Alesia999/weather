import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherForecast } from '../../interfaces/weather-forecast.interface';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  private static readonly FORECAST_ITEMS_COUNT = 8;

  @Input() city!: string;
  @Input() weather!: Weather;
  forecast!: WeatherForecast;
  isForecastVisible: boolean = false;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherForecastByCity(this.city);
  }

  getWeatherForecastByCity(city: string) {
    this.weatherService
      .getWeatherForecastByCity({
        city,
        forecastItemsCount: WeatherComponent.FORECAST_ITEMS_COUNT,
      })
      .subscribe((forecast) => (this.forecast = forecast));
  }

  toggleForecastVisibility() {
    this.isForecastVisible = !this.isForecastVisible;
  }
}
