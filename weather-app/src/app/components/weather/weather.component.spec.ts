import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Weather } from 'src/app/interfaces/weather.interface';
import { WeatherComponent } from './weather.component';

let mockWeather: Weather = {
  weatherDescription: 'clouds',
  weatherImage: '2d',
  temperature: 25,
  windSpeed: 3,
  cityName: 'Torun',
  countryCode: 'PL',
};

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    component.weather = mockWeather;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
