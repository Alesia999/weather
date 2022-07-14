export interface WeatherForecast {
  forecastList: ForecastInfo[];
}

export interface ForecastInfo {
  forecastDate: string;
  temperature: number;
  forecastDescription: string;
  forecastImage: string;
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

interface WeatherInfo {
  main: string;
  icon: string;
}
