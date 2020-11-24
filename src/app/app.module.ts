import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { ComponentsModule } from './components/components.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';

import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AuthGuard } from './auth.guard';

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
    BrowserModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    ComponentsModule,
    CoursesPageModule,
    LoginPageModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
