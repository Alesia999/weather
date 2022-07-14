import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from './interfaces/weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cities = ['Torun', 'Hamburg', 'Stockholm', 'Corfu', 'Lisbon'];
  weather!: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cities.forEach((city) => {
      this.getCurrentWeatherByCity(city);
    });
  }

  getCurrentWeatherByCity(city: string) {
    this.weatherService
      .getCurrentWeatherByCity(city)
      .subscribe((weather) => (this.weather = weather));
  }
}
