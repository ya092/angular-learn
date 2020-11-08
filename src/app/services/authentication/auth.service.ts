import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', password);
  }

  logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPass');
  }
  isAuthenticated() {
    return !!(localStorage.getItem('userEmail') && localStorage.getItem('userPass'));
  }

  getUserInfo() {
    return localStorage.getItem('userEmail');
  }
}
