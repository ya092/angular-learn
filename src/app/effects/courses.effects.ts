import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, tap, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { autoLogin, logIn, logInError, logInSuccess } from '../actions/auth.actions';
import { AuthService } from '../services/authentication/auth.service';
import { Router } from '@angular/router';
import { getCourses, getCoursesError, getCoursesSuccess } from '../actions/courses.actions';
import { CoursesService } from '../services/courses/courses.service';

@Injectable()
export class CoursesEffects {
  constructor(private actions$: Actions, private coursesService: CoursesService) {}

  getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourses),
      mergeMap(({ count }) =>
        this.coursesService.getCourses(count).pipe(
          map((courses) => getCoursesSuccess({ courses: courses })),
          catchError((error) => of(getCoursesError({ error })))
        )
      )
    )
  );
}
