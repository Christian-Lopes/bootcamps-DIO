import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Amorinha', type: 'dog' },
    { name: 'Garfield', type: 'cat' },
    { name: 'Rosa', type: 'bird' },
    { name: 'Doginho', type: 'dog' },
    { name: 'Tom', type: 'cat' },
    { name: 'Jerry', type: 'mouse' },
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
