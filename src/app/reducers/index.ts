import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState } from '../state/auth.state';
import { CoursesState } from '../state/courses.state';
import { authReducer } from './auth.reducer';
import { coursesReducer } from './courses.reducer';

export interface State {
  auth: AuthState;
  courses: CoursesState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  courses: coursesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
