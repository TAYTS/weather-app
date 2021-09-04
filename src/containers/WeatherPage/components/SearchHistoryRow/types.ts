import { SearchWeatherRequest, WeatherSearchHistory } from 'containers/WeatherPage/types';

export type SearchHistoryRowProps = {
  history: WeatherSearchHistory[];
  onSearch: (searchPayload: SearchWeatherRequest) => void;
  onDelete: (id: string) => void;
};
