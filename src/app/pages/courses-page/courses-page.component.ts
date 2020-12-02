import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/models/models';
import { FilterByPipe } from 'src/app/pipes/filterby/filterBy.pipe';
import { OrderByPipe } from 'src/app/pipes/orderby/orderBy.pipe';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [OrderByPipe, FilterByPipe],
})
export class CoursesPageComponent implements OnInit {
  public searchValue: string = '';
  public courses: ICourse[];

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {
    this.courses = new OrderByPipe().transform(this.coursesService.getCourses());
  }

  loadMore = () => confirm('clicked load more button');

  search = () => {
    this.courses = new FilterByPipe().transform(this.courses, this.searchValue);
  };

  delete = (id: number) => {
    if (confirm('Delete item?')) {
      this.courses = this.coursesService.deleteCourse(this.courses, id);
    }
  };
  addCourse() {
    this.router.navigate(['./courses/new']);
  }
}
