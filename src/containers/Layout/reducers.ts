import { LayoutActions, LayoutState } from 'containers/Layout/types';
import { LAYOUT_ACTION_TYPES } from 'containers/Layout/constants';

export const initialState = {
  loading: false,
};

export default function reducer(state: LayoutState = initialState, action: LayoutActions): LayoutState {
  switch (action.type) {
    case LAYOUT_ACTION_TYPES.TOGGLE_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
}
