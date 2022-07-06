import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  testText = 'Testes com pipes';

  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
