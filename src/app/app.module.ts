import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { ComponentsModule } from './components/components.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';

import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: CoursesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'add', component: AddCoursePageComponent },
  { path: '**', component: CoursesPageComponent },
];

@NgModule({
  declarations: [AppComponent, AddCoursePageComponent, ],
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
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
