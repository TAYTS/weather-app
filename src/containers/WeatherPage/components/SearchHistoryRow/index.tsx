import React from 'react';
import dayjs from 'dayjs';

import { ReactComponent as SearchIcon } from 'containers/WeatherPage/components/SearchHistoryRow/icons/search.svg';
import { ReactComponent as TrashIcon } from 'containers/WeatherPage/components/SearchHistoryRow/icons/trash.svg';

import 'containers/WeatherPage/components/SearchHistoryRow/index.scss';
import { SearchHistoryRowProps } from 'containers/WeatherPage/components/SearchHistoryRow/types';

const SearchHistoryRow: React.FC<SearchHistoryRowProps> = ({ history, onSearch, onDelete }) => {
  return (
    <div className="search-history-row-container">
      {history.map((historyData, index) => (
        <div key={historyData.id} className="search-history-data-row-container">
          <p>{`${index + 1}. ${historyData.city}, ${historyData.country}`}</p>
          <div className="data-row-action-group">
            <p>{`${dayjs(historyData.timestamp * 1000).format('hh:mm:ss A')}`}</p>
            <button
              className="data-row-button"
              onClick={() => onSearch({ city: historyData.city, country: historyData.country })}
            >
              <SearchIcon />
            </button>
            <button className="data-row-button" onClick={() => onDelete(historyData.id)}>
              <TrashIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchHistoryRow;
