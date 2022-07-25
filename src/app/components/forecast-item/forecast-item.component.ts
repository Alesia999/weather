import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastItem } from 'src/app/models/forecast-item.interface';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastItemComponent {
  @Input() forecastItem!: ForecastItem;
}
