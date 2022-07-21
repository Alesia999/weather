import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherImageComponent } from './weather-image.component';

describe('WeatherImageComponent', () => {
  let component: WeatherImageComponent;
  let fixture: ComponentFixture<WeatherImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherImageComponent ]
    })
    .compileComponents();
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
