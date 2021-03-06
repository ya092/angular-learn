import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/models/models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: ICourse;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit() {}

  delete() {
    this.onDelete.emit(this.courseItem.id);
  }
  editCourse(id: number) {
    this.router.navigate([`./courses/${id}`]);
  }
}
