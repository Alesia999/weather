export namespace OpenWeatherAPI {
  export interface Weather {
    weather: WeatherDescription[];
    main: {
      temp: number;
    };
    wind: {
      speed: number;
    };
    sys: {
      country: string;
    };
    name: string;
  }

  interface WeatherDescription {
    main: string;
    icon: string;
  }

  export interface WeatherForecast {
    list: ForecastItem[];
  }

  interface ForecastItem {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: WeatherDescription[];
  }
}
