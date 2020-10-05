import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [BreadcrumbsComponent, LogoComponent, UserLoginComponent],
  imports: [CommonModule],
  exports: [BreadcrumbsComponent, LogoComponent, UserLoginComponent]
})
export class ComponentsModule {}
