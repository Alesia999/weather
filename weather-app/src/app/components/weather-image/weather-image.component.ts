import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.scss'],
})
export class WeatherImageComponent {
  @Input() imageName!: string;
  @Input() alt!: string;
  @Input() width!: string;
}
