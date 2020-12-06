import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses/courses.service';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: string[];
  public title: string;
  public routeSub: Subscription;
  public titleSub: Subscription;
  constructor(private router: Router, private service: CoursesService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((data: NavigationEnd) => {
        this.breadcrumbs = data.urlAfterRedirects.slice(1).split('/');
        if (!isNaN(+this.breadcrumbs[1])) {
          this.service
            .getCourseById(+this.breadcrumbs[1])
            .subscribe((data) => (this.title = data.name));
        } else this.title = this.breadcrumbs[1];
      });
  }
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.titleSub) {
      this.titleSub.unsubscribe();
    }
  }
}
