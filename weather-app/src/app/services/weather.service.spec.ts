import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { Weather } from '../models/weather.interface';
import { WeatherForecast } from 'src/app/models/weather-forecast.type';

const city = 'Torun';
const forecastItemsCount = 1;
const apiWeatherUrl = `${environment.apiUrl}weather?units=metric&q=${city}&appid=${environment.apiKey}`;
const apiForecastUrl = `${environment.apiUrl}forecast?units=metric&q=${city}&appid=${environment.apiKey}&cnt=${forecastItemsCount}`;

const mockWeatherResponse = {
  weather: [{ main: 'Clouds', icon: '03n' }],
  main: {
    temp: 20.63,
  },
  wind: {
    speed: 3.22,
  },
  sys: {
    country: 'PL',
  },
  name: 'Toruń',
};

const mockWeatherForecastResponse = {
  list: [
    {
      dt_txt: '2022-07-21 21:00:00',
      main: {
        temp: 20,
      },
      weather: [{ main: 'Clouds', icon: '03n' }],
    },
  ],
};

describe('WeatherService', () => {
  let service: WeatherService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get current weather by city', () => {
    let weather: Weather | undefined;

    service.getCurrentWeatherByCity(city).subscribe((res) => {
      weather = res;
    });
    const request = controller.expectOne(apiWeatherUrl);
    request.flush(mockWeatherResponse);
    expect(weather).toEqual({
      weatherDescription: mockWeatherResponse.weather[0].main,
      weatherImage: mockWeatherResponse.weather[0].icon,
      temperature: mockWeatherResponse.main.temp,
      windSpeed: mockWeatherResponse.wind.speed,
      cityName: mockWeatherResponse.name,
      countryCode: mockWeatherResponse.sys.country,
    });
  });

  it('should get weather forecast by city', () => {
    let weatherForecast: WeatherForecast | undefined;

    service
      .getWeatherForecastByCity({ city, forecastItemsCount })
      .subscribe((res) => {
        weatherForecast = res;
      });
    const request = controller.expectOne(apiForecastUrl);
    request.flush(mockWeatherForecastResponse);
    expect(weatherForecast).toEqual([
      {
        forecastDate: mockWeatherForecastResponse['list'][0].dt_txt,
        temperature: mockWeatherForecastResponse.list[0].main.temp,
        forecastDescription:
          mockWeatherForecastResponse.list[0].weather[0].main,
        forecastImage: mockWeatherForecastResponse.list[0].weather[0].icon,
      },
    ]);
  });
});
