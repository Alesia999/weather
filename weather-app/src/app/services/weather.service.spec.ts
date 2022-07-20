import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Weather } from './../interfaces/weather.interface';

const city = 'Torun';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=6de247093613209788e48c0171abbc79`;

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
    const request = controller.expectOne(apiUrl);
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
});
