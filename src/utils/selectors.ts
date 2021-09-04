import { createSelector, OutputSelector } from 'reselect';
import get from 'lodash/get';
import { AppRootState } from 'store/types';

export const select = <T>(keys: string[]): OutputSelector<AppRootState, T, (res: T) => T> =>
  createSelector(
    (appState: AppRootState) => get(appState, keys),
    (data: T): T => data,
  );
