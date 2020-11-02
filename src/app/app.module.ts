import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { ComponentsModule } from './components/components.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';

import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

const appRoutes: Routes = [
  { path: '', component: CoursesPageComponent },
  { path: '**', component: CoursesPageComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HeaderModule,
    FooterModule,
    ComponentsModule,
    CoursesPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
