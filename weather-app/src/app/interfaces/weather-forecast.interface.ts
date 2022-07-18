export type WeatherForecast = ForecastInfo[];

export interface ForecastInfo {
  forecastDate: string;
  temperature: number;
  forecastDescription: string;
  forecastImage: string;
}
