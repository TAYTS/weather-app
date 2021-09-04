import React, { useState } from 'react';

import { WeatherSearchFormProps } from 'containers/WeatherPage/components/WeatherSearchForm/types';
import 'containers/WeatherPage/components/WeatherSearchForm/index.scss';
import WeatherSearchField from 'containers/WeatherPage/components/WeatherSearchField';

const WeatherSearchForm: React.FC<WeatherSearchFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const onSearchHandler = () => {
    onSearch({
      city: city.trim(),
      country: country.trim(),
    });
  };

  const onClearHandler = () => {
    setCity('');
    setCountry('');
  };

  const disabledSearch = !city.trim() || !country.trim();

  return (
    <div className="weather-search-form-container">
      <WeatherSearchField fieldName="City" fieldValue={city} onChange={setCity} />
      <WeatherSearchField fieldName="Country" fieldValue={country} onChange={setCountry} />

      <div className="form-action-group">
        <button onClick={onSearchHandler} disabled={disabledSearch}>
          Search
        </button>
        <button onClick={onClearHandler}>Clear</button>
      </div>
    </div>
  );
};

export default WeatherSearchForm;
