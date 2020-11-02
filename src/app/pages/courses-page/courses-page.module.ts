import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from './course-item/course-item/course-item.component';
import { CourseBorderDirective } from 'src/app/directives/course-border.directive';
import { DurationPipe } from 'src/app/pipes/duration/duration.pipe';
import { OrderByPipe } from 'src/app/pipes/orderby/orderBy.pipe';
import { FilterByPipe } from 'src/app/pipes/filterby/filterBy.pipe';

@NgModule({
  declarations: [CoursesPageComponent, CourseItemComponent, CourseBorderDirective, DurationPipe, OrderByPipe, FilterByPipe],
  imports: [CommonModule, FormsModule],
  exports: [CoursesPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesPageModule {}
