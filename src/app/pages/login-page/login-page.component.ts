import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Input() public userMail: string;
  @Input() public userPass: string;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.userMail, this.userPass);    
  }
}
