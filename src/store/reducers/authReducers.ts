import {AuthModel} from '../types/Auth';
import {
  AuthActionTypes,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from '../types/Actions';

const authReducerDefaultState: AuthModel[] = [];

const authReducers = (
  state = authReducerDefaultState,
  action: AuthActionTypes,
): AuthModel[] => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return [...state, action.auth];
    case SIGN_IN_SUCCESS:
      return [...state, action.auth];
    case SIGN_OUT_SUCCESS:
      return state;
    case SIGN_UP_ERROR:
      return [...state, action.err];
    case SIGN_IN_ERROR:
      return [...state, action.err];
    default:
      return state;
  }
};

export {authReducers};
