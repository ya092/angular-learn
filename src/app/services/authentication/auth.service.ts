import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { logOut } from 'src/app/actions/auth.actions';
import { SERVER_URL } from 'src/app/constants';
import { selectUser } from 'src/app/selectors/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginSub: Subscription;
  public infoSub: Subscription;
  public isAuth: boolean;

  constructor(private httpClient: HttpClient, private store: Store, private router: Router) {
    this.store.select(selectUser).subscribe((data) => (this.isAuth = !!data.firstname));
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${SERVER_URL}auth/login`, {
      login: email,
      password: password,
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(logOut());
    this.router.navigate(['./login']);
  }
  isAuthenticated() {
    return this.isAuth;
  }

  getUserInfo(token: string): Observable<any> {
    return this.httpClient.post(`${SERVER_URL}auth/userinfo`, { token });
  }
}
