import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  cities = of(['Torun', 'Hamburg', 'Stockholm', 'Corfu', 'Lisbon']);
}
