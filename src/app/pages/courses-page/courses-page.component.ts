import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/models';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
})
export class CoursesPageComponent implements OnInit {
  public searchValue: string = '';
  public courses: ICourse[];

  constructor() {}

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        creationDate: '9 Nov, 2018',
        duration: 88,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
      },
      {
        id: 2,
        title: 'Video Course 1. Name tag',
        creationDate: '9 Nov, 2018',
        duration: 38,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
      },
      {
        id: 3,
        title: 'Video Course 1. Name tag',
        creationDate: '9 Nov, 2018',
        duration: 120,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
      },
    ];
  }

  loadMore = () => console.log('clicked load more button');

  search = () => console.log(this.searchValue);

  delete = (id: number) => console.log(id);
}
