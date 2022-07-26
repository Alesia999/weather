import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Weather } from 'src/app/models/weather.interface';
import { WeatherComponent } from './weather.component';

const mockWeather: Weather = {
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

  it('should display weather properties', () => {
    expect(
      fixture.debugElement.query(By.css('[data-test-id=city-name]'))
        .nativeElement.textContent
    ).toContain(mockWeather.cityName);
    expect(
      fixture.debugElement.query(By.css('[data-test-id=temperature]'))
        .nativeElement.textContent
    ).toContain(mockWeather.temperature);
    expect(
      fixture.debugElement.query(By.css('[data-test-id=weather-description]'))
        .nativeElement.textContent
    ).toContain(mockWeather.weatherDescription);
    expect(
      fixture.debugElement.query(By.css('[data-test-id=wind-speed]'))
        .nativeElement.textContent
    ).toContain(mockWeather.windSpeed);
  });

  it('should render weather image', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image).toBeTruthy();
  });

  it('should pass image name', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['imageName']).toBe(mockWeather.weatherImage);
  });

  it('should pass image description', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['alt']).toBe(mockWeather.weatherDescription);
  });
});
