import { createAction, props } from '@ngrx/store';
import { ICourse } from '../models/models';

export const getCourses = createAction('Courses request', props<{count: number}>());
export const getCoursesSuccess = createAction('Courses loaded', props<{ courses: ICourse[] }>());
export const getCoursesError = createAction('Courses not loaded', props<{ error: Error }>());
