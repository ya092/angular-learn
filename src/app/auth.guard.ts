import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './services/authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router, private store: Store) {}

  canActivate(): Observable<boolean> | boolean {
   return this.service.getUserInfo(localStorage.getItem('token')).pipe(
      map((e) => {
        if (e) {
          return true;
        }
      }),
      catchError((err) => {
        window.alert(' You are not logged in.Please LogIn ');
        this.router.navigate(['./login']);
        return of(false);
      })
    );
  }
}
