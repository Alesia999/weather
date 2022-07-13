import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, ForecastComponent, ForecastItemComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
