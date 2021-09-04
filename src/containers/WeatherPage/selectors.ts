import { select } from 'utils/selectors';
import { KEY } from 'containers/WeatherPage/constants';
import { SearchWeatherResponse, WeatherSearchHistory } from 'containers/WeatherPage/types';

const selectCurrentResult = select<SearchWeatherResponse>([KEY, 'currentResult']);

const selectHistory = select<WeatherSearchHistory[]>([KEY, 'history']);

const selectHasError = select<boolean>([KEY, 'hasError']);

export { selectCurrentResult, selectHistory, selectHasError };
