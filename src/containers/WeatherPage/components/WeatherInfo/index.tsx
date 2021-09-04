import React from 'react';
import dayjs from 'dayjs';

import 'containers/WeatherPage/components/WeatherInfo/index.scss';
import { WeatherInfoProps } from 'containers/WeatherPage/components/WeatherInfo/types';

const renderWeatherInfoDetails = (weatherInfo: { title: string; description: string }[]) =>
  weatherInfo.map((info, index) => (
    <div key={info.title} className="weather-details-content-container">
      <p className="weather-info-title">{info.title}:</p>
      <p className="weather-info-description">{info.description}</p>
    </div>
  ));

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  city,
  country,
  weather,
  description,
  tempMin,
  tempMax,
  humidity,
  timestamp,
}) => {
  return (
    <div className="weather-info-container">
      <p className="location-text">
        {city}, {country}
      </p>

      <p className="weather-text">{weather}</p>

      {renderWeatherInfoDetails([
        { title: 'Description', description: description },
        { title: 'Temperature', description: `${tempMin}ºC ~ ${tempMax}ºC` },
        { title: 'Humidity', description: `${humidity}%` },
        { title: 'Time', description: dayjs(timestamp * 1000).format('YYYY-MM-DD hh:mmA') },
      ])}
    </div>
  );
};

export default WeatherInfo;
