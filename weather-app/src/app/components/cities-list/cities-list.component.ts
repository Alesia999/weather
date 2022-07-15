import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from './../../interfaces/weather.interface';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit {

  @Input() city!: string;
  weather!: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
  this.getCurrentWeatherByCity(this.city);
  }

  getCurrentWeatherByCity(city: string) {
    this.weatherService
      .getCurrentWeatherByCity(city)
      .subscribe((weather) => (this.weather = weather));
  }
}
