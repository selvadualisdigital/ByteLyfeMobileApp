// interface
import {AuthModel} from '../types/Auth';
// authActions
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  AppActions,
} from '../types/Actions';
// redux store dependencies
import {Dispatch} from 'redux';
import {AppState} from '../index';
//auth service
import AuthApi from '../services/authServices';


export const signInuserSuccess = (auth: AuthModel): AppActions => ({
  type: SIGN_IN_SUCCESS,
  auth,
});
export const signInuserError = (err: AuthModel): AppActions => ({
  type: SIGN_IN_ERROR,
  err,
});
export const signUpuserSuccess = (auth: AuthModel): AppActions => ({
  type: SIGN_UP_SUCCESS,
  auth,
});
export const signUpuserError = (err: AuthModel): AppActions => ({
  type: SIGN_UP_ERROR,
  err,
});
export const signOutuserSuccess = (): AppActions => ({type: SIGN_OUT_SUCCESS});

export const signInUsingProvider = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    return AuthApi.googleSignInSignUp().then((token:any) => {
      console.log(token)
      dispatch(signInuserSuccess(token));
    }).catch((error:any) => {
      dispatch(signInuserError(error));
    });  
  };
};

export const signOutUsingProvider = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    return AuthApi.signOut().then(() => {
      dispatch(signOutuserSuccess());
    }).catch((error:any) => {
      dispatch(signInuserError(error));
    });  
  };
};




