import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { autoLogin, logIn, logInError, logInSuccess } from '../actions/auth.actions';
import { AuthService } from '../services/authentication/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logIn),
      switchMap((action) => {
        return this.authService.login(action.login, action.password);
      }),
      switchMap(({ token }) => {
        localStorage.setItem('token', token);
        return this.authService.getUserInfo(token).pipe(
          map((result) => {
            return logInSuccess({ firstname: result.name.first, lastname: result.name.last });
          })
        );
      }),
      catchError((error) => of(logInError({ error })))
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(autoLogin),
      switchMap(() => {
        return this.authService.getUserInfo(localStorage.getItem('token')).pipe(
          map((result) => {
            return logInSuccess({ firstname: result.name.first, lastname: result.name.last });
          })
        );
      })
    )
  );

  logInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logInSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  logInError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logInError),
        tap(() => alert('Wrong credentials!'))
      ),
    { dispatch: false }
  );
}
