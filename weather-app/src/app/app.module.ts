import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { MatCardModule } from '@angular/material/card';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, ForecastComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
