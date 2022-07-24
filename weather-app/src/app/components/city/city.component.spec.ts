import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherForecast } from 'src/app/interfaces/weather-forecast.interface';
import { CityComponent } from './city.component';
import { By } from '@angular/platform-browser';
import { ReplaySubject, Subject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

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

  it('should get weather forecast when onInit', () => {
    component.ngOnInit();
    expect(component.forecast$).toBeTruthy();
  });

  it('should toggle forecast visibility', () => {
    component.toggleForecastVisibility();
    expect(component.isForecastVisible).toBeTruthy();
    component.toggleForecastVisibility();
    expect(component.isForecastVisible).toBeFalsy();
  })


});
