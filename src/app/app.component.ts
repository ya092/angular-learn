import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { autoLogin, logInSuccess } from './actions/auth.actions';
import { selectUser } from './selectors/auth.selector';
import { AuthService } from './services/authentication/auth.service';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public loaderService: LoaderService,
    public store: Store
  ) {}
  title = 'angular-learn';

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.store.dispatch(autoLogin());
    }
  }
}
