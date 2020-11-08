import { Injectable } from '@angular/core';
import { ICourse } from 'src/app/models/models';
import { courses } from '_mocks/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return courses
  }

  createCourse(courses: ICourse[], course: ICourse) {
    courses.push(course)
  }

  getCourseById(courses: ICourse[], id: number) {
    return courses.find(course => course.id === id)
  }

  updateCourse(courses: ICourse[], id: number, courseNewData: ICourse ) {
    const index = courses.findIndex((course => course.id === id));
    courses[index] = courseNewData
  }

  deleteCourse(courses: ICourse[], id: number) {
    return courses.filter(item => item.id !== id)
  }

}
