import { all, call, takeLatest, put } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';

import { toggleLoading } from 'containers/Layout/actions';
import { searchWeatherAction } from 'containers/WeatherPage/actions';
import { searchWeatherApi } from 'containers/WeatherPage/api';
import { CallReturnType } from 'utils/typing';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* searchWeatherSageHandler(action: ActionType<typeof searchWeatherAction.request>): Generator<any, any, any> {
  try {
    yield put(toggleLoading(true));
    const { data }: CallReturnType<typeof searchWeatherApi> = yield call(searchWeatherApi, action.payload);
    console.log('checking...', data);
    yield put(searchWeatherAction.success(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(searchWeatherAction.failure(error));
    }
  } finally {
    yield put(toggleLoading(false));
  }
}

export default function* weatherPageSaga(): IterableIterator<ReturnType<typeof all>> {
  yield all([takeLatest(getType(searchWeatherAction.request), searchWeatherSageHandler)]);
}
