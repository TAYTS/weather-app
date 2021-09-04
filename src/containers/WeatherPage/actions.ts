import { createAction, createAsyncAction } from 'typesafe-actions';

import { WEATHER_PAGE_ACTION_TYPES } from 'containers/WeatherPage/constants';
import { SearchWeatherRequest, SearchWeatherResponse } from 'containers/WeatherPage/types';

export const searchWeatherAction = createAsyncAction(
  WEATHER_PAGE_ACTION_TYPES.SEARCH_WEATHER,
  WEATHER_PAGE_ACTION_TYPES.SEARCH_WEATHER_SUCCESS,
  WEATHER_PAGE_ACTION_TYPES.SEARCH_WEATHER_FAILED,
)<SearchWeatherRequest, SearchWeatherResponse, Error>();

export const deleteSearchResult = createAction(WEATHER_PAGE_ACTION_TYPES.DELETE_SEARCH_RESULT)<string>();
