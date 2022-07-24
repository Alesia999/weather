import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherForecast } from 'src/app/models/weather-forecast.type';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  @Input() forecast!: WeatherForecast;
}
