import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Weather } from 'src/app/models/weather.interface';
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
    expect(component).toBeDefined();
  });

  it('should display weather properties', () => {
    expect(
      fixture.debugElement.query(By.css('h3')).nativeElement.textContent
    ).toContain('Torun');
    expect(
      fixture.debugElement.query(By.css('h2')).nativeElement.textContent
    ).toContain(25);
    expect(
      fixture.debugElement.queryAll(By.css('h4'))[0].nativeElement.textContent
    ).toContain('clouds');
    expect(
      fixture.debugElement.queryAll(By.css('h4'))[1].nativeElement.textContent
    ).toContain(3);
  });

  it('should render weather image', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image).toBeDefined();
  });

  it('should pass image name', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['imageName']).toBe('2d');
  });

  it('should pass image description', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['alt']).toBe('clouds');
  });
});
