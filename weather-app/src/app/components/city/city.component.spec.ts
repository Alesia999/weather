import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { CityComponent } from './city.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Weather } from '../../models/weather.interface';
import { WeatherForecast } from 'src/app/models/weather-forecast.type';
import { By } from '@angular/platform-browser';

const weather: Weather = {
  weatherDescription: 'clouds',
  weatherImage: '2d',
  temperature: 25,
  windSpeed: 3,
  cityName: 'Torun',
  countryCode: 'PL',
};

const forecast: WeatherForecast = [
  {
    forecastDate: '2022-07-21 21:00:00',
    temperature: 25,
    forecastDescription: 'clouds',
    forecastImage: '10n',
  },
];

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CityComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: WeatherService,
          useValue: {
            getCurrentWeatherByCity: () => of(weather),
            getWeatherForecastByCity: () => of(forecast),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get current weather', () => {
    const spyOnWeather = spyOn(component, 'getCurrentWeatherByCity');
    component.ngOnInit();
    expect(spyOnWeather).toHaveBeenCalled();
    component.weather$.subscribe((w) => expect(w).toEqual(weather));
  });

  it('should get weather forecast', () => {
    const spyOnForecast = spyOn(component, 'getWeatherForecastByCity');
    component.ngOnInit();
    expect(spyOnForecast).toHaveBeenCalled();
    component.forecast$.subscribe((f) => expect(f).toEqual(forecast));
  });

  it('should toggle forecast visibility', () => {
    const weather = fixture.debugElement.query(By.css('app-weather'));
    weather.triggerEventHandler('click', null);
    fixture.detectChanges();
    const spyOnForecast = spyOn(component, 'getWeatherForecastByCity');
    component.ngOnInit();
    expect(component.isForecastVisible).toBeTruthy();
    expect(spyOnForecast).toHaveBeenCalled();
    weather.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isForecastVisible).toBeFalsy();
  });
});
