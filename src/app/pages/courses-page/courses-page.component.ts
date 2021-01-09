import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { getCourses } from 'src/app/actions/courses.actions';
import { ICourse } from 'src/app/models/models';
import { FilterByPipe } from 'src/app/pipes/filterby/filterBy.pipe';
import { OrderByPipe } from 'src/app/pipes/orderby/orderBy.pipe';
import { selectCourses } from 'src/app/selectors/courses.selector';
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
  public courses: ICourse[];
  public loadSub: Subscription;
  public deleteSub: Subscription;
  public searchSub: Subscription;
  public searchValue = new Subject<string>();

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(getCourses({ count: this.count }));
    this.store.select(selectCourses).subscribe(courses => this.courses = courses)
    this.count = this.itemsPerPage;
    this.searchSub = this.searchValue.pipe(debounceTime(1000)).subscribe({
      next: (value) => {
        if (value.length > 2) {
          new FilterByPipe(this.coursesService)
            .transform(value, this.count)
            .subscribe((data) => (this.courses = data));
        } else if (value.length === 0) {
          this.store.dispatch(getCourses({ count: this.count }));

        }
      },
    });
  }


  loadMore = () => {
    this.count += this.itemsPerPage;
    this.store.dispatch(getCourses({ count: this.count }));

  };

  delete = (id: number) => {
    if (confirm('Delete item?')) {
      this.deleteSub = this.coursesService.deleteCourse(id).subscribe();
      this.store.dispatch(getCourses({ count: this.count }));

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
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }
}
