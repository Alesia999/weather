import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
import { CityComponent } from './components/city/city.component';
import { WeatherImageComponent } from './components/weather-image/weather-image.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ForecastComponent,
    ForecastItemComponent,
    CityComponent,
    WeatherImageComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
