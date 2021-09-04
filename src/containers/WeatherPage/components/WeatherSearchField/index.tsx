import React from 'react';

import 'containers/WeatherPage/components/WeatherSearchField/index.scss';
import { WeatherSearchFieldProps } from 'containers/WeatherPage/components/WeatherSearchField/types';

const WeatherSearchField: React.FC<WeatherSearchFieldProps> = ({ fieldName, fieldValue, onChange }) => {
  return (
    <div className="weather-search-field-container">
      <p className="weather-search-field-name">{fieldName}:</p>
      <input
        className="weather-search-field-input"
        value={fieldValue}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default WeatherSearchField;
