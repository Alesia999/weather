export namespace OpenWeatherAPI {
  export interface WeatherFromServer {
    weather: WeatherInfo[];
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

  interface WeatherInfo {
    main: string;
    icon: string;
  }

  export interface WeatherForecastFromServer {
    list: ForecastInfoFromServer[];
  }

  interface ForecastInfoFromServer {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: WeatherInfo[];
  }
}
