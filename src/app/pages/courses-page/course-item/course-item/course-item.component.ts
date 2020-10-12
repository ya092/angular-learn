import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/models/models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: ICourse;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()
  public duration: string;
  
  constructor() {}

  ngOnInit() {
    this.duration = this.convertTime(this.courseItem.duration);
  }

  delete() {
    this.onDelete.emit(this.courseItem.id)
  }

  convertTime(num: number): string {
    let result: string;
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    if(hours && minutes){
    result = `${hours}h ${minutes}min`;
    } else if (hours && !minutes) {
      result = `${hours}h`;
    } else {
      result = `${minutes}min`;
    }
    return result
  }
}
