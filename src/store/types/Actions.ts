import { AuthModel } from './Auth';


export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';


export interface signInsuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  auth: AuthModel;
}

export interface signInErrorAction {
  type: typeof SIGN_IN_ERROR;
  err: AuthModel;
}

export interface signUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  auth: AuthModel;
}

export interface signUpErrorAction {
  type: typeof SIGN_UP_ERROR;
  err: AuthModel;
}

export interface signOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

export type AuthActionTypes =
  | signInsuccessAction
  | signInErrorAction
  | signUpSuccessAction
  | signUpErrorAction
  | signOutSuccessAction;

export type AppActions = AuthActionTypes;
