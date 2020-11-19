import { Component, Input, OnInit } from '@angular/core';
import { DurationPipe } from 'src/app/pipes/duration/duration.pipe';

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

  constructor() {}

  ngOnInit() {}

  cancel = (e) => {
    e.preventDefault()    
  } 
  save = (e) => {
    e.preventDefault()    
  } 
}
