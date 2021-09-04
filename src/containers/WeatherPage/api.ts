import { AxiosPromise } from 'axios';

import api from 'apis';
import apiConfig from 'apis/apiConfig';
import { SearchWeatherRequest, SearchWeatherResponse } from 'containers/WeatherPage/types';

const searchWeatherApi = (payload: SearchWeatherRequest): AxiosPromise<SearchWeatherResponse> => {
  return api.get({
    url: apiConfig.weatherApi,
    params: {
      q: `${payload.city},${payload.country}`,
      appid: process.env.REACT_APP_WEATHER_API_KEY || '',
    },
  });
};

export { searchWeatherApi };
