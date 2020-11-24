import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DurationPipe } from 'src/app/pipes/duration/duration.pipe';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css'],
})
export class AddCoursePageComponent implements OnInit {
  public title: string = '';
  public description: string = '';
  public duration: string = '';
  public date: string = '';

  constructor(private service: CoursesService, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    if(this.isEdit()){
      this.fillFields(this.isEdit())
    }
  }

  cancel = (e) => {
    e.preventDefault();
  };
  
  save = (e) => {
    e.preventDefault();
  };

  isEdit = () => this.activateRoute.snapshot.params['id'];

  fillFields = (id: number) => {
    const { title, description, duration, creationDate } = this.service.getCourseById(
      this.service.getCourses(),
      +id
    );
    this.title = title;
    this.description = description;
    this.duration = duration.toString();
    this.date = creationDate;
  }
  
}
