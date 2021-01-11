import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICourse } from 'src/app/models/models';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css'],
})
export class AddCoursePageComponent implements OnInit {
  public updateSub: Subscription;
  public createSub: Subscription;
  public form: FormGroup;

  constructor(
    private service: CoursesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      date: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    });
  }
  get title() {
    return this.form.get('title');
  }
  get description() {
    return this.form.get('description');
  }
  get date() {
    return this.form.get('date');
  }
  get duration() {
    return this.form.get('duration');
  }

  ngOnInit() {
    if (this.isEdit()) {
      this.fillFields(this.isEdit());
    }
  }

  cancel = (e) => {
    e.preventDefault();
    this.router.navigate(['./']);
  };

  save = () => {
    if (this.form.status === 'VALID') {
      console.log(this.form);

      this.isEdit()
        ? (this.updateSub = this.service
            .updateCourse(this.isEdit(), this.createCourse())
            .subscribe())
        : (this.createSub = this.service.createCourse(this.createCourse()).subscribe());
      // this.router.navigate(['./']);
    }
  };

  isValid = () => this.form.status === 'VALID';

  isEdit = () => this.activateRoute.snapshot.params['id'];

  fillFields = (id: number) => {
    this.service.getCourseById(id).subscribe((data) => {
      const { name, description, length, date } = data;
      this.form.setValue({
        title: name,
        description: description,
        duration: length.toString(),
        date: this.datePipe.transform(date, 'yyyy-MM-dd'),
      });
    });
  };

  createCourse = (): ICourse => {
    return {
      name: this.form.value.title,
      description: this.form.value.description,
      length: this.form.value.duration,
      date: this.form.value.date,
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
