import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { CityComponent } from './city.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Weather } from '../../models/weather.interface';
import { WeatherForecast } from 'src/app/models/weather-forecast.type';
import { By } from '@angular/platform-browser';

const mockWeather: Weather = {
  weatherDescription: 'clouds',
  weatherImage: '2d',
  temperature: 25,
  windSpeed: 3,
  cityName: 'Torun',
  countryCode: 'PL',
};

const mockForecast: WeatherForecast = [
  {
    forecastDate: '2022-07-21 21:00:00',
    temperature: 25,
    forecastDescription: 'clouds',
    forecastImage: '10n',
  },
];

const mockCity = 'Torun';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let fakeWeatherService: WeatherService;

  beforeEach(async () => {
    fakeWeatherService = jasmine.createSpyObj<WeatherService>(
      'WeatherService',
      {
        getCurrentWeatherByCity: of(mockWeather),
        getWeatherForecastByCity: of(mockForecast),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [CityComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: WeatherService,
          useValue: fakeWeatherService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    component.city = mockCity;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current weather when onInit', () => {
    const weather = fixture.debugElement.query(By.css('app-weather'));
    expect(weather).toBeTruthy();
    expect(fakeWeatherService.getCurrentWeatherByCity).toHaveBeenCalledOnceWith(
      mockCity
    );
  });

  it('should render and hide forecast after clicking', () => {
    const weather = fixture.debugElement.query(By.css('app-weather'));
    weather.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-forecast'))).toBeTruthy();
    expect(
      fakeWeatherService.getWeatherForecastByCity
    ).toHaveBeenCalledOnceWith({ city: mockCity, forecastItemsCount: 8 });
    weather.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-forecast'))).toBeFalsy();
    weather.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(
      fakeWeatherService.getWeatherForecastByCity
    ).not.toHaveBeenCalledTimes(2);
  });

  it('should pass weather properties during component initialisation', () => {
    const weather = fixture.debugElement.query(By.css('app-weather'));
    expect(weather.properties['weather']).toBe(mockWeather);
  });

  it('should pass forecast properties after rendering forecast component', () => {
    const weather = fixture.debugElement.query(By.css('app-weather'));
    weather.triggerEventHandler('click', null);
    fixture.detectChanges();
    const forecast = fixture.debugElement.query(By.css('app-forecast'));
    expect(forecast.properties['forecast']).toBe(mockForecast);
  });
});
