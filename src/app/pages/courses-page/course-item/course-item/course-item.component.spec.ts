import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseBorderDirective } from 'src/app/directives/course-border.directive';
import { DurationPipe } from 'src/app/pipes/duration/duration.pipe';


import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, CourseBorderDirective, DurationPipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.courseItem = {
      topRated: false,
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '9 Nov, 2018',
      duration: 88,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium minus itaque. Veniam consectetur, ipsa, quod ipsam earum deleniti aliquid labore provident enim, iure cupiditate quia magnam expedita incidunt voluptatum eaque. Quibusdam, doloremque sequi minima minus illum explicabo magnam voluptatibus.',
    }
    fixture.detectChanges();
    
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });
  
  describe('delete', ()=> {
    it('should emit delete on click', () => {
      const spy = spyOn(component, 'delete');
      fixture.debugElement.query(By.css('.delete-button')).triggerEventHandler('click', null)      
      fixture.detectChanges();
      
      expect(spy).toHaveBeenCalled();
    })

    it('should emit value 1', () => {
      const onEmitSpy = spyOn(component.onDelete, 'emit');
      const buttons = fixture.nativeElement.querySelectorAll('button');
      fixture.debugElement.query(By.css('.delete-button')).triggerEventHandler('click', null)
      buttons[1].click();
      fixture.detectChanges();

      expect(onEmitSpy).toHaveBeenCalledWith(1);
    })
  })
   
});
