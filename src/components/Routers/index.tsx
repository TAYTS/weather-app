import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WeatherPage from 'containers/WeatherPage';

const Routers: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={WeatherPage} />
    </Switch>
  );
};

export default Routers;
