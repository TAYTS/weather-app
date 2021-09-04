import { createStore, applyMiddleware } from 'redux';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import createReducer from 'store/rootReducer';
import { AppRootState, InjectedStore } from 'store/types';

export default function configureStore(initialState: AppRootState | Record<string, unknown> = {}): InjectedStore {
  /* redux-saga middleware */
  const sagaMiddleware = createSagaMiddleware();
  const { run: runSaga } = sagaMiddleware;

  /* configure middlewares */
  const middlewares = [sagaMiddleware];

  /* configure enhancers */
  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  /**
   * create composer instance
   * Use redux-devtools composer in development
   * Use redux composer in production
   */
  const composeEnhancers = composeWithDevTools({});

  /* create store */
  const store: InjectedStore = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

  /**
   * inject extra attributes for saga, reducer/saga injection
   * add log functionality to the action dispatch
   */
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      forceReducerReload(store);
    });
  }

  return store;
}
