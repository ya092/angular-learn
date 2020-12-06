import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginSub: Subscription;
  public infoSub: Subscription;
  
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.httpClient
      .post('http://localhost:3004/auth/login', {
        login: email,
        password: password,
      })
      .subscribe(
        (response) => {
          if (response) {
            localStorage.setItem('token', response['token']);
            this.router.navigate(['./']);
          }
        },
        () => alert('Wrobng cred!')
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  getUserInfo() {
    this.httpClient
      .post('http://localhost:3004/auth/userinfo', { token: localStorage.getItem('token') })
      .subscribe((response) => console.log(response));
  }
}
