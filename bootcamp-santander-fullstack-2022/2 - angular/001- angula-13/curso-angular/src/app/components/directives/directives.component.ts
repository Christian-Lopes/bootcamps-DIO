import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 24;
  font = 'Arial';
  color = 'purple';

  classes = ['green-title', 'small-title'];

  underline = 'underline';

  constructor() { }

  ngOnInit(): void {
  }

}
