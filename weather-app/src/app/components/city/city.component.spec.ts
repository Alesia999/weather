import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { CityComponent } from './city.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Weather } from './../../interfaces/weather.interface';
import { WeatherForecast } from 'src/app/interfaces/weather-forecast.interface';
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

let weatherServiceStub: Partial<WeatherService> = {
  getCurrentWeatherByCity: () => of(weather),
  getWeatherForecastByCity: () => of(forecast),
};

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
          useValue: weatherServiceStub,
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

  it('should get current weather when onInit', () => {
    const spyOnGetWeather = spyOn(component, 'getCurrentWeatherByCity');
    component.ngOnInit();
    expect(spyOnGetWeather).toHaveBeenCalled();
  });

  it('should get weather forecast after clicked on city', () => {
    component.ngOnInit();
    expect(component.forecast$).toBeTruthy();
  });

  it('should toggle forecast visibility', () => {
    const forecastComponent = fixture.debugElement.query(By.css('.forecast'));
    component.toggleForecastVisibility();
    expect(component.isForecastVisible).toBeTruthy();
    fixture.detectChanges();
    component.toggleForecastVisibility();
    expect(component.isForecastVisible).toBeFalsy();
  });
});
