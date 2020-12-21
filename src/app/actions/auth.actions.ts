import { createAction, props } from '@ngrx/store';

export const logIn = createAction(
  'LogIn request',
  props<{ login: string; password: string }>()
);
export const logOut = createAction('Logout');
export const logInSuccess = createAction('LogIn success', props<{ firstname: string, lastname: string}>());
export const logInError = createAction('LogIn failed', props<{ error: Error }>());
export const autoLogin = createAction('AutoLogin')