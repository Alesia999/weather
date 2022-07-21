import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherImageComponent } from './weather-image.component';

describe('WeatherImageComponent', () => {
  let component: WeatherImageComponent;
  let fixture: ComponentFixture<WeatherImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherImageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
