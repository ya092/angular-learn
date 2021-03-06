import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from './course-item/course-item/course-item.component';
import { ComponentsModule } from 'src/app/components/components.module';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [CoursesPageComponent, CourseItemComponent],
  imports: [CommonModule, FormsModule, ComponentsModule, HttpClientModule],
  exports: [CoursesPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesPageModule {}
