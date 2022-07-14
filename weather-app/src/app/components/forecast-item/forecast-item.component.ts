import { Component, Input } from '@angular/core';
import { ForecastInfo } from 'src/app/interfaces/weather-forecast.interface';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss'],
})
export class ForecastItemComponent {
  @Input() forecastInfo!: ForecastInfo;
}
