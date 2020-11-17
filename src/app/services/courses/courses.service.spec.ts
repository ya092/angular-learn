import { TestBed, async, inject } from '@angular/core/testing';
import { CoursesService } from './courses.service';

const newCourse = {
  id: 5,
  title: 'course',
  creationDate: '2020-10-31',
  duration: 1,
  description: 'course',
  topRated: false,
};

describe('Service: Courses', () => {
  const service = new CoursesService();

  beforeEach(() => {
    const mockGetCourses = {
      getCourses: () => {
        return [
          {
            id: 1,
            title: 'Video Course 1. Name tag',
            creationDate: '2020-10-31',
            duration: 88,
            description:
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
            topRated: false,
          },
          {
            id: 2,
            title: 'Video Course 2. Name tag',
            creationDate: '2019-10-31',
            duration: 38,
            description:
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
            topRated: true,
          },
          {
            id: 3,
            title: 'Video Course 3. Name tag',
            creationDate: '2021-10-31',
            duration: 120,
            description:
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
            topRated: false,
          },
        ];
      },
    };
    spyOn(service, 'getCourses').and.callFake(mockGetCourses.getCourses);
  });

  describe('getCourses', () => {
    it('should return mocked courses', () => {
      let courses = service.getCourses();
      expect(courses.length).toBe(3);
    });
  });

  describe('createCourse', () => {
    it('should create course and return array with it', () => {
      let courses = service.getCourses();

      service.createCourse(courses, newCourse);
      expect(courses.length).toBe(4);
    });
  });

  describe('getCourseById', () => {
    it('should return course', () => {
      let courses = service.getCourses();

      expect(service.getCourseById(courses, 1)).toEqual(courses[0]);
    });
  });

  describe('updateCourse', () => {
    it('should update course', () => {
      let courses = service.getCourses();

      service.updateCourse(courses, 1, newCourse);
      expect(service.getCourseById(courses, 5)).toEqual(newCourse);
    });
  });

  describe('deleteCourse', () => {
    it('should delete course', () => {
      let courses = service.getCourses();

      service.deleteCourse(courses, 2);
      expect(service.deleteCourse(courses, 2).length).toBe(2);
    });
  });
});
