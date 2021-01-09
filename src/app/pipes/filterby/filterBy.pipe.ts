import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICourse } from 'src/app/models/models';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  constructor(public service: CoursesService) {}

  transform(value: string, count: number): Observable<ICourse[]> {
    return this.service.getCourses(count).pipe(
      map((courses) => {
        if (!value) {
          return courses;
        }
        const filtered: ICourse[] = [];

        courses.filter((course) => {
          if (course.name.toLowerCase().includes(value.toLowerCase())) {
            filtered.push(course);
          }
        });
        return filtered;
      })
    );
  }
}
