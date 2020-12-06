import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(count = 5) {
    return this.httpClient.get<ICourse[]>(`http://localhost:3004/courses?start=0&count=${count}`,);
  }

  createCourse(course: ICourse) {
    return this.httpClient.post<ICourse>('http://localhost:3004/courses', course);
  }

  getCourseById(id: number) {
    return this.httpClient.get<ICourse>(`http://localhost:3004/courses/${id}`);
  }

  updateCourse(id: number, course: ICourse) {
    return this.httpClient.patch<ICourse>(`http://localhost:3004/courses/${id}`, course);
  }

  deleteCourse(id: number) {
    return this.httpClient.delete<ICourse>(`http://localhost:3004/courses/${id}`);
  }
}
