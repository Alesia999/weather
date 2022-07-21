import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherForecast } from 'src/app/interfaces/weather-forecast.interface';
import { CityComponent } from './city.component';
import { By } from '@angular/platform-browser';
import { ReplaySubject, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockWeather = {
  weatherDescription: 'clouds',
  weatherImage: '2d',
  temperature: 25,
  windSpeed: 3,
  cityName: 'Torun',
  countryCode: 'PL',
};

const mockForecast$: Subject<WeatherForecast> = new ReplaySubject(1);
mockForecast$.next([
  {
    forecastDate: '2022-07-21 9:00:00',
    temperature: 25,
    forecastDescription: 'cloudy',
    forecastImage: '10n',
  },
]);

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let service: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CityComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [WeatherService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(WeatherService);
    component.weather = mockWeather;
    component.forecast$ = mockForecast$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render weather', () => {
    const { debugElement } = fixture;
    const weather = debugElement.query(By.css('app-weather'));
    expect(weather).toBeDefined();
  });

  it('should render forecast if weather card was clicked', () => {
    const { debugElement } = fixture;
    const weather = debugElement.query(By.css('app-weather'));
    const forecast = debugElement.query(By.css('app-forecast'));
    weather.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isForecastVisible).toBeTruthy();
    expect(forecast).toBeDefined();
  });
});
