import { ActionType } from 'typesafe-actions';
import * as actions from 'containers/WeatherPage/actions';

export type WeatherPageState = {
  history: WeatherSearchHistory[];
  hasError: boolean;
  currentResult: SearchWeatherResponse | undefined;
};

export type SearchWeatherRequest = {
  city: string;
  country: string;
};

export type SearchWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherSearchHistory = {
  id: string;
  city: string;
  country: string;
  timestamp: number;
};

export type WeatherPageActions = ActionType<typeof actions>;
