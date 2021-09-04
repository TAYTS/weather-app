import { WeatherPageActions, WeatherPageState } from 'containers/WeatherPage/types';
import { WEATHER_PAGE_ACTION_TYPES } from 'containers/WeatherPage/constants';
import { v4 as uuid } from 'uuid';

export const initialState: WeatherPageState = {
  history: [],
  hasError: false,
  currentResult: undefined,
};

export default function reducer(state: WeatherPageState = initialState, action: WeatherPageActions): WeatherPageState {
  switch (action.type) {
    case WEATHER_PAGE_ACTION_TYPES.SEARCH_WEATHER: {
      return {
        ...state,
        hasError: false,
        currentResult: undefined,
      };
    }

    case WEATHER_PAGE_ACTION_TYPES.SEARCH_WEATHER_SUCCESS: {
      console.log('checking', action.payload);
      return {
        ...state,
        history: [
          {
            id: uuid(),
            city: action.payload.name,
            country: action.payload.sys.country,
            timestamp: action.payload.dt,
          },
          ...state.history,
        ],
        hasError: false,
        currentResult: action.payload,
      };
    }

    case WEATHER_PAGE_ACTION_TYPES.SEARCH_WEATHER_FAILED: {
      return {
        ...state,
        hasError: true,
        currentResult: undefined,
      };
    }

    case WEATHER_PAGE_ACTION_TYPES.DELETE_SEARCH_RESULT: {
      return {
        ...state,
        history: state.history.filter((historyData) => historyData.id != action.payload),
      };
    }

    default:
      return state;
  }
}
