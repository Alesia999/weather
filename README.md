# WeatherApp

Weather App is a single page application that presents a list of 5 European cities and shows
the current weather situation for each of them. Clicking on a city shows the forecast in the next hours.
City is an application-level component, it has logic of receiving current weather by city and weather forecast by city. Other components are presentational. Weather and Forecast components are responsible for having view of current weather and forecast. It was decided to create a separate component for a weather image, so that it could be used throughout the application.

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
