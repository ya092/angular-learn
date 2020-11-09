import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public authService: AuthService, private router: Router) {}
  public isAuthenticated: boolean;

  ngOnInit() {}

  login() {
    this.router.navigate(['./login']);
  }

  logout() {
    this.onLogout.emit(true);
  }
}
