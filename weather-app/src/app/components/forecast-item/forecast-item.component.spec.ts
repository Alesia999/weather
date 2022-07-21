import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastItemComponent } from './forecast-item.component';
import { ForecastItem } from 'src/app/interfaces/forecast-item.interface';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

let mockForecastItem: ForecastItem = {
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

  it('should display forecast item properties', () => {
    expect(
      fixture.debugElement.query(By.css('.forecast-time')).nativeElement
        .textContent
    ).toContain('9');
    expect(
      fixture.debugElement.query(By.css('.forecast-temperature')).nativeElement
        .textContent
    ).toContain(25);
  });

  it('should render app weather image', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image).toBeTruthy();
  });

  it('should pass image name', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['imageName']).toBe('10n');
  });

  it('should pass image description', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('app-weather-image'));
    expect(image.properties['alt']).toBe('cloudy');
  });
});
