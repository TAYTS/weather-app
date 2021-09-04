import { combineReducers, Reducer } from 'redux';

import layoutReducer from 'containers/Layout/reducers';
import { AppRootState } from 'store/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createReducer(injectedReducers: any = {}): Reducer {
  return combineReducers<AppRootState>({
    layout: layoutReducer,
    ...injectedReducers,
  });
}
