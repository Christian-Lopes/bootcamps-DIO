import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  name: string = 'Christian';
  welcome: string = `Seja bem-vindo ao Angular ${this.name}!`;
}
