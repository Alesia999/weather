import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastItem } from 'src/app/interfaces/weather-forecast.interface';
import { ForecastItemComponent } from './forecast-item.component';

let mockForecastItem: ForecastItem = {
  forecastDate: '2022-07-21 21:00:00',
  temperature: 25,
  forecastDescription: 'cloudy',
  forecastImage: '10n',
};

describe('ForecastItemComponent', () => {
  let component: ForecastItemComponent;
  let fixture: ComponentFixture<ForecastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastItemComponent);
    component = fixture.componentInstance;
    component.forecastItem = mockForecastItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
