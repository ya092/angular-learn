import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { CoursesState } from '../state/courses.state';

export const coursesSelector = (state: State) => state.courses;

export const selectCourses = createSelector(coursesSelector, (state: CoursesState) => state.courses);

export const selectCoursesCount = createSelector(
  coursesSelector,
  (state: CoursesState) => state.courses.length
);
