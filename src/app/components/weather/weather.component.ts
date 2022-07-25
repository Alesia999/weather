import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from '../../models/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  @Input() weather!: Weather;
}
