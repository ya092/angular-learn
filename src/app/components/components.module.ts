import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { OrderByPipe } from '../pipes/orderby/orderBy.pipe';
import { FilterByPipe } from '../pipes/filterby/filterBy.pipe';
import { DurationPipe } from '../pipes/duration/duration.pipe';
import { CourseBorderDirective } from '../directives/course-border.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    LogoComponent,
    UserLoginComponent,
    LoaderComponent,
    OrderByPipe,
    FilterByPipe,
    DurationPipe,
    CourseBorderDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BreadcrumbsComponent,
    LogoComponent,
    UserLoginComponent,
    LoaderComponent,
    OrderByPipe,
    FilterByPipe,
    DurationPipe,
    CourseBorderDirective,
  ],
})
export class ComponentsModule {}
