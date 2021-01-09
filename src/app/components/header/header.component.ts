import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/selectors/auth.selector';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public userInfo = '';
  constructor(private authService: AuthService, private router: Router, private store: Store) {}

  ngOnInit() {
    this.store.select(selectUser).subscribe((userInfo) => {
      this.userInfo = `${userInfo.firstname} ${userInfo.lastname}`;
    });
  }

  logout = () => {
    this.authService.logout();
  };
}
