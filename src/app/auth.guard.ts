import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.service.isAuthenticated()) {
      return true;
    } else {
      window.alert(' You are not logged in.Please LogIn ');
      this.router.navigate(['./login']);
    }
  }
}
