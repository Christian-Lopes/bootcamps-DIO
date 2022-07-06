import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './couser.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string = '';

  constructor(private couserService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.couserService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) =>
      course.name
        .toLocaleLowerCase()
        .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter(): string {
    return this._filterBy;
  }
}
