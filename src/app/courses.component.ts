import { Component } from '@angular/core';

@Component ({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
            <ul>
              <li>Angrylar</li>
              <li>Angular Merkel</li>
              <li>Hangrylar</li>
              <li>Angelar</li>
              <li>Michelangular</li>
            </ul>`
})
export class CoursesComponent {
  title = "List of courses 🤓";


}
