import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  @Input() city!: string;
  
  weather!: Weather;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentWeatherByCity(this.city);
  }

  getCurrentWeatherByCity(city: string) {
    this.weatherService
      .getCurrentWeatherByCity(city)
      .subscribe((weather) => (this.weather = weather));
  }
}
