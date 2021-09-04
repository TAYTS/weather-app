import { createAction } from 'typesafe-actions';
import { LAYOUT_ACTION_TYPES } from 'containers/Layout/constants';

export const toggleLoading = createAction(LAYOUT_ACTION_TYPES.TOGGLE_LOADING)<boolean>();
