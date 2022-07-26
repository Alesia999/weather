import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render an independent city', () => {
    const city = fixture.debugElement.query(By.css('app-city'));
    expect(city).toBeTruthy();
  });

  it('should create the same amount of cities as defined in the app', () => {
    const citiesQuantity = app.cities.length;
    const citiesDe = fixture.debugElement.queryAll(By.css('.city'));
    expect(citiesDe.length).toEqual(citiesQuantity);
  });
});
