import { Reducer, Store } from 'redux';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';
import { LayoutState } from 'containers/Layout/types';

export interface InjectedStore extends Store {
  injectedReducers: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  injectedSagas: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  runSaga(saga: Saga | undefined, args: any | undefined): any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface InjectReducerParams {
  key: keyof AppRootState;
  reducer: Reducer<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface InjectSagaParams {
  key: SagaKeys;
  saga: Saga;
  mode?: SagaInjectionModes;
}

export interface AppRootState {
  readonly layout: LayoutState;
}

export type SagaKeys = '';
