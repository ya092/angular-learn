import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { AuthState } from '../state/auth.state';

export const selectAuth = (state: State) => state.auth;

export const selectUser = createSelector(selectAuth, (state: AuthState) => state.user);
