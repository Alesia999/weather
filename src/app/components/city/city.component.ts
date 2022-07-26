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

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
