import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses/courses.service';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: string[];

  constructor(private router: Router, private service: CoursesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((data: NavigationEnd) => {
        this.breadcrumbs = data.urlAfterRedirects.slice(1).split('/');
      });
  }

  convertIdToTitle(id: string) {
    if (!isNaN(+id)) {
      return this.service.getCourseById(this.service.getCourses(), +id).title;
    } else return id;
  }
}
