export type WeatherForecast = ForecastItem[];

export interface ForecastItem {
  forecastDate: string;
  temperature: number;
  forecastDescription: string;
  forecastImage: string;
}
