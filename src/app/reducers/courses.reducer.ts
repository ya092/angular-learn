import { createReducer, on } from '@ngrx/store';
import { getCourses, getCoursesError, getCoursesSuccess } from '../actions/courses.actions';
import { CoursesState } from '../state/courses.state';

const initialState: CoursesState = {
  courses: null,
  info: '',
};

export const coursesReducer = createReducer(
  initialState,
  on(getCourses, (state) => ({ ...state, info: 'pending' })),
  on(getCoursesSuccess, (state, {courses})=> ({
    ...state,
    courses,
    info: 'success'
  })),
  on(getCoursesError, (state, {error}) => ({
    ...state,
    info: error.message
  }))
);
