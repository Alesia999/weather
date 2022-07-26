import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ForecastItem } from 'src/app/models/forecast-item.interface';
import { ForecastComponent } from './forecast.component';

const mockForecastItem: ForecastItem = {
  forecastDate: '2022-07-21 9:00:00',
  temperature: 25,
  forecastDescription: 'cloudy',
  forecastImage: '10n',
};

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    component.forecast = [mockForecastItem];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render forecast item', () => {
    const forecastItem = fixture.debugElement.query(
      By.css('app-forecast-item')
    );
    expect(forecastItem).toBeTruthy();
  });
});
