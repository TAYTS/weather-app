import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import Layout from 'containers/Layout';
import Routers from 'components/Routers';
import 'App.scss';

const initialState = {};
const store = configureStore(initialState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routers />
      </Layout>
    </Provider>
  );
};

export default App;
