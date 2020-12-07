import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/app/constants';
import { ICourse } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(count = 5) {
    return this.httpClient.get<ICourse[]>(`${SERVER_URL}courses?start=0&count=${count}`,);
  }

  createCourse(course: ICourse) {
    return this.httpClient.post<ICourse>(`${SERVER_URL}courses`, course);
  }

  getCourseById(id: number) {
    return this.httpClient.get<ICourse>(`${SERVER_URL}courses/${id}`);
  }

  updateCourse(id: number, course: ICourse) {
    return this.httpClient.patch<ICourse>(`${SERVER_URL}courses/${id}`, course);
  }

  deleteCourse(id: number) {
    return this.httpClient.delete<ICourse>(`${SERVER_URL}courses/${id}`);
  }
}
