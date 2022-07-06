import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Christian';
  age: number = 33;
  job: string = 'Developer';
  hobbie = ['correr', 'estudar', 'jogar game'];
  automovel = {
    type: 'moto',
    marca: 'Yamaha',
    cilindrada: 250,
    modelo: 'Fazer'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
