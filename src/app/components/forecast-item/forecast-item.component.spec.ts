import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastItemComponent } from './forecast-item.component';
import { ForecastItem } from 'src/app/models/forecast-item.interface';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

const mockForecastItem: ForecastItem = {
  forecastDate: '2022-07-21 9:00:00',
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
      schemas: [NO_ERRORS_SCHEMA],
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

  it('should display forecast time and temperature', () => {
    let pipe = new DatePipe('en');
    expect(
      fixture.debugElement.query(By.css('.forecast-time')).nativeElement
        .textContent
    ).toContain(pipe.transform(mockForecastItem.forecastDate, 'h a'));
    expect(
      fixture.debugElement.query(By.css('.forecast-temperature')).nativeElement
        .textContent
    ).toContain(mockForecastItem.temperature);
  });

  it('should render weather image', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image).toBeTruthy();
  });

  it('should pass image name', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['imageName']).toBe(mockForecastItem.forecastImage);
  });

  it('should pass image description', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['alt']).toBe(mockForecastItem.forecastDescription);
  });
});
