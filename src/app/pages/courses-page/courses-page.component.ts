import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  private count: number;
  private itemsPerPage = 5;
  public searchValue: string = '';
  public courses: ICourse[];
  public loadSub: Subscription;
  public deleteSub: Subscription;

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {
    this.count = this.itemsPerPage
    this.loadCourses();
  }

  loadCourses = () => {
    this.loadSub = this.coursesService.getCourses(this.count).subscribe((data) => {
      this.courses = new OrderByPipe().transform(data);
    });
  };

  loadMore = () => {
    this.count += this.itemsPerPage
    this.loadCourses()
  }

  search = () => {
    this.courses = new FilterByPipe().transform(this.courses, this.searchValue);
  };

  delete = (id: number) => {
    if (confirm('Delete item?')) {
      this.deleteSub = this.coursesService.deleteCourse(id).subscribe();
      this.loadCourses();
    }
  };
  addCourse() {
    this.router.navigate(['./courses/new']);
  }

  ngOnDestroy(): void {
    if (this.loadSub) {
      this.loadSub.unsubscribe();
    }
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
