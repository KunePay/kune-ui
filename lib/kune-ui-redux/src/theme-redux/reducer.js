// @flow
import * as types from './types';

export default function themeReducer(state: any = {}, action: types.actionType) {
  switch (action.type) {
    case types.THEME_SET_IN_PROGRESS:
      return {
        inProgress: action.inProgress,
      };

    case types.THEME_SET_SUCCESS:
      return {
        name: action.name,
        theme: action.theme,
        shade: action.shade,
        direction: action.direction,
        inProgress: false,
      };

    case types.THEME_SET_FAIL:
      return {
        error: action.error,
        inProgress: false,
      };

    default:
      return state;
  }
};
