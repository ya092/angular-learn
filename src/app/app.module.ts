import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { ComponentsModule } from './components/components.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';

import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { CoursesEffects } from './effects/courses.effects';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [AppComponent, AddCoursePageComponent, ErrorPageComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    ComponentsModule,
    CoursesPageModule,
    LoginPageModule, 
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [AuthGuard, DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
