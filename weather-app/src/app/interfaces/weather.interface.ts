export interface Weather {
  weatherDescription: string;
  weatherImage: string;
  temperature: number;
  windSpeed: number;
  cityName: string;
  countryCode: string;
}

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
