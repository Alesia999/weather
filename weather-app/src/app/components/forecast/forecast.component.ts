import { Component, Input } from '@angular/core';
import { ForecastInfo } from 'src/app/interfaces/weather-forecast.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  @Input() forecastList!: ForecastInfo[];
}
