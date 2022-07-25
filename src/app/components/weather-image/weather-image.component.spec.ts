import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WeatherImageComponent } from './weather-image.component';

const imageConfig = {
  imageName: '04d',
  alt: 'clouds',
};

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
    component.imageName = imageConfig.imageName;
    component.alt = imageConfig.alt;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain image properties', () => {
    const { debugElement } = fixture;
    const image = debugElement.query(By.css('img'));
    expect(image.properties['src']).toContain('04d');
    expect(image.properties['alt']).toContain('clouds');
  });
});
