import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/models';
import { FilterByPipe } from 'src/app/pipes/filterby/filterBy.pipe';
import { OrderByPipe } from 'src/app/pipes/orderby/orderBy.pipe';
import { courses } from '_mocks/courses';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  providers: [OrderByPipe,  FilterByPipe]
})
export class CoursesPageComponent implements OnInit {
  public searchValue: string = '';
  public courses: ICourse[];

  constructor() {}

  ngOnInit() {
    this.courses = new OrderByPipe().transform(courses)
  }

  loadMore = () => console.log('clicked load more button');

  search = () => {
    this.courses = new FilterByPipe().transform(courses, this.searchValue)
  }

  delete = (id: number) => console.log(id);
}
