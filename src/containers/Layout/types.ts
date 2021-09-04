import { ActionType } from 'typesafe-actions';
import * as actions from 'containers/Layout/actions';

export type LayoutState = {
  loading: boolean;
};

export type LayoutActions = ActionType<typeof actions>;
