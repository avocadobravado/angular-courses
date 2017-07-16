import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component ({
  selector: 'courses',
  template: `
            <h2>{{ title }}</h2>
            <ul>
              <li *ngFor="let course of courses">
              {{ course }}
              </li>
            </ul>`
})
export class CoursesComponent {
  title = "List of courses 🤓";
  courses;

  // A constructor is where an object is initialized
  constructor(public service: CoursesService) {
    this.courses = service.getCourses();
  }

}
