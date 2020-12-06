import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css'],
})
export class AddCoursePageComponent implements OnInit {
  public name: string = '';
  public description: string = '';
  public length: string = '';
  public date: string = '';
  public updateSub: Subscription
  public createSub: Subscription

  constructor(
    private service: CoursesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    if (this.isEdit()) {
      this.fillFields(this.isEdit());
    }
  }

  cancel = (e) => {
    e.preventDefault();
    this.router.navigate(['./']);
  };

  save = (e) => {
    e.preventDefault();
    this.isEdit()
      ? this.updateSub = this.service.updateCourse(this.isEdit(), this.createCourse()).subscribe()
      : this.createSub = this.service.createCourse(this.createCourse()).subscribe();
    this.router.navigate(['./']);
  };

  isEdit = () => this.activateRoute.snapshot.params['id'];

  fillFields = (id: number) => {
    this.service.getCourseById(id).subscribe((data) => {
      const { name, description, length, date } = data;
      this.name = name;
      this.description = description;
      this.length = length.toString();
      this.date = this.datePipe.transform(date, 'yyyy-MM-dd');
    });
  };

  createCourse = () => {
    return {
      name: this.name,
      description: this.description,
      length: +this.length,
      date: new Date(this.date),
      isTopRated: false,
    };
  };

  ngOnDestroy(): void {
    if (this.createSub) {
      this.createSub.unsubscribe();
    }
    if (this.updateSub) {
      this.updateSub.unsubscribe();
    }
  }
}
