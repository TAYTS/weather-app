import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { KEY } from 'containers/WeatherPage/constants';
import { useInjectReducer, useInjectSaga } from 'store/reduxInjectors';
import reducer from 'containers/WeatherPage/reducers';
import saga from 'containers/WeatherPage/sagas';
import { deleteSearchResult, searchWeatherAction } from 'containers/WeatherPage/actions';
import { selectCurrentResult, selectHasError, selectHistory } from 'containers/WeatherPage/selectors';
import WeatherSearchForm from 'containers/WeatherPage/components/WeatherSearchForm';
import WeatherInfo from 'containers/WeatherPage/components/WeatherInfo';
import SearchHistoryRow from 'containers/WeatherPage/components/SearchHistoryRow';
import ErrorMessage from 'components/ErrorMessage';
import Header from 'components/Header';
import 'containers/WeatherPage/index.scss';
import { SearchWeatherRequest } from 'containers/WeatherPage/types';

const WeatherPage: React.FC = () => {
  const dispatch = useDispatch();
  useInjectReducer({ key: KEY, reducer });
  useInjectSaga({ key: KEY, saga });

  const weatherSearchResult = useSelector(selectCurrentResult);
  const hasError = useSelector(selectHasError);
  const searchHistory = useSelector(selectHistory);

  const onSearchHandler = (searchPayload: SearchWeatherRequest) => {
    dispatch(searchWeatherAction.request(searchPayload));
  };

  const onDeleteHandler = (id: string) => {
    dispatch(deleteSearchResult(id));
  };

  return (
    <div className="weather-page-container">
      <Header title="Today's Weather" />
      <WeatherSearchForm onSearch={onSearchHandler} />

      <div className="search-result-container">
        {!isEmpty(weatherSearchResult) && (
          <WeatherInfo
            city={weatherSearchResult.name}
            country={weatherSearchResult.sys.country}
            weather={weatherSearchResult.weather[0].main}
            description={weatherSearchResult.weather[0].description}
            tempMin={weatherSearchResult.main.temp_min}
            tempMax={weatherSearchResult.main.temp_max}
            humidity={weatherSearchResult.main.humidity}
            timestamp={weatherSearchResult.dt}
          />
        )}

        {hasError && <ErrorMessage message="Not found" />}
      </div>

      <div className="search-history-container">
        <Header title="Search History" />
        <SearchHistoryRow history={searchHistory} onSearch={onSearchHandler} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
};

export default WeatherPage;
