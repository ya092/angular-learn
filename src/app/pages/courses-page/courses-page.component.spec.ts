import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log when loadMore called ', () => {
    const consoleSpy = spyOn(console, 'log');
    component.loadMore();

    expect(consoleSpy).toHaveBeenCalled()    
  });

  it('should log when search called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.searchValue = 'search'
    component.search();

    expect(consoleSpy).toHaveBeenCalledWith('search')    
  });

  it('should log when delete called', () => {
    const consoleSpy = spyOn(console, 'log');
    component.delete(1);

    expect(consoleSpy).toHaveBeenCalledWith(1)    
  });
});
