import { Component, Input } from '@angular/core';
import { ForecastItem } from 'src/app/interfaces/forecast-item.interface';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss'],
})
export class ForecastItemComponent {
  @Input() forecastItem!: ForecastItem;
}
