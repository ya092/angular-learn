import { createReducer, on } from '@ngrx/store';
import { autoLogin, logIn, logInError, logInSuccess, logOut } from '../actions/auth.actions';
import { AuthState } from '../state/auth.state';

const initialState: AuthState = {
  user: {
    firstname: '',
    lastname: '',
  },
  info: '',
};

export const authReducer = createReducer(
  initialState,
  on(logIn, (state) => ({ ...state, info: 'pending' })),
  on(logInSuccess, (state, { firstname, lastname }) => ({
    ...state,
    user: { firstname, lastname },
    info: 'success'
  })),
  on(logInError, (state, { error }) => ({
    ...state,
    info: error.message,
  })),
  on(logOut, (state) => ({
    ...state,
    user: {
      firstname: '',
      lastname: ''
    },
    info: 'logged out'
  })),
  on(autoLogin, (state) => ({ ...state, info: 'autoLogged' })),

);
