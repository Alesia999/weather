import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from '../../models/weather.interface';
import { WeatherForecast } from 'src/app/models/weather-forecast.type';
import { Observable, shareReplay, Subject, takeUntil } from 'rxjs';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ height: 0, opacity: 0 }),
          animate('100ms', style({ height: '*', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ height: '*', opacity: 1 }),
          animate('100ms', style({ height: 0, opacity: 0 }))
        ])
      ]
    )
  ]
})
export class CityComponent implements OnInit, OnDestroy {
  private static readonly FORECAST_ITEMS_COUNT = 8;
  private readonly destroy$: Subject<void> = new Subject<void>();
  @Input() city!: string;
  weather$!: Observable<Weather>;
  forecast$!: Observable<WeatherForecast>;
  isForecastVisible: boolean = false;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weather$ = this.weatherService.getCurrentWeatherByCity(this.city);
    this.forecast$ = this.weatherService
      .getWeatherForecastByCity({
        city: this.city,
        forecastItemsCount: CityComponent.FORECAST_ITEMS_COUNT,
      })
      .pipe(shareReplay(1), takeUntil(this.destroy$));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleForecastVisibility() {
    this.isForecastVisible = !this.isForecastVisible;
  }
}
