// @flow
import * as types from './types';

type State = () => types.stateType;
type Dispatch = (action: types.actionType) => void;

export const setTheme = (
  name: string,
  theme: any,
  shade: string,
  direction: string,
  successCallback: ?Function,
  errorCallback: ?Function,
) =>
async (dispatch: Dispatch, getState: State) =>{
  try {
    dispatch({
      name: '',
      theme: {},
      shade: '',
      direction: '',
      type: types.THEME_SET_IN_PROGRESS,
      inProgress: true,
      error: null,
    });

    if (!theme[shade]) {
      throw(`Invalid shade selected for theme '${name}'`);
    }

    dispatch({
      name,
      theme,
      shade,
      direction,
      type: types.THEME_SET_SUCCESS,
      inProgress: false,
      error: null,
    });
  } catch (err) {
    console.log(err);

    if (errorCallback) {
      errorCallback(err);
    }

    dispatch({
      name: '',
      theme: {},
      shade: '',
      direction: '',
      type: types.THEME_SET_FAIL,
      inProgress: false,
      error: {
        message: `${err.message}. Please try again`,
      },
    });
  }
};
