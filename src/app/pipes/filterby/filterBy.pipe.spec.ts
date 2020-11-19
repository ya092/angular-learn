import { FilterByPipe } from './filterBy.pipe';
import { courses } from '_mocks/courses';

const mockedCourses = courses;

describe('Pipe: FilterBye', () => {
  let pipe = new FilterByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter when value exist', () => {
    expect(pipe.transform(mockedCourses, '1').length).toEqual(1);
  });

  it('should return array when value is empty', () => {
    expect(pipe.transform(mockedCourses, '').length).toEqual(3);
  });
});
