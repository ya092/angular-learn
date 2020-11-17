/* tslint:disable:no-unused-variable */

import { OrderByPipe } from './orderBy.pipe';
import { courses } from '_mocks/courses';

const mockedCourses = courses;
const leastLength = {
  id: 2,
  title: 'Video Course 2. Name tag',
  creationDate: '2019-10-31',
  duration: 38,
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
  topRated: true,
};

describe('Pipe: OrderBye', () => {
  let pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return the item with least duration', () => {
    expect(pipe.transform(mockedCourses)[0]).toEqual(leastLength);
  });
});
