import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCourseBorder]',
})
export class CourseBorderDirective {
  @Input('appCourseBorder') public creationDate: string;

  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    let color;
    const creationTime = new Date(this.creationDate).getTime();
    const currentTime = new Date().getTime();
    const FOURTEEN_DAYS_TIME = 1209600000; 
    if(creationTime < currentTime && creationTime >= currentTime - FOURTEEN_DAYS_TIME ) {
      color = '#a3c644'
    } else if(creationTime > currentTime) {
      color = '#39c2d7'
    } else {
      color = 'transparent'
    }
    this.element.nativeElement.style.borderColor = color;
  }
}
