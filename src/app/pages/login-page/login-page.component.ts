import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logIn } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Input() public userMail: string;
  @Input() public userPass: string;
  constructor(private store: Store) {}

  ngOnInit() {}

  login() {
    this.store.dispatch(logIn({ login: this.userMail, password: this.userPass }));
  }
}
