import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherForecast } from '../weatherForecast';
import { Weather } from './../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() city!: string;
  weather!: Weather;
  forecast!: WeatherForecast;
  table: Boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.search(this.city);
    this.searchForecast(this.city);
  }

  search(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe((weather) => (this.weather = weather));
  }

  searchForecast(city: string) {
    this.weatherService
      .getForecast(city)
      .subscribe((forecast) => (this.forecast = forecast));
  }

  showTable() {
    this.table = !this.table;
  }
}
