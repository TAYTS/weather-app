import { SearchWeatherRequest } from 'containers/WeatherPage/types';

export type WeatherSearchFormProps = {
  onSearch: (searchPayload: SearchWeatherRequest) => void;
};
