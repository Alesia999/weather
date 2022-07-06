export interface WeatherForecast {
  list: ForecastInfo[];
}

interface ForecastInfo {
  dt_txt: string;

  main: {
    temp: number;
  };
  
  weather: WeatherInfo[];
}

interface WeatherInfo {
  main: string;
  icon: string;
}
