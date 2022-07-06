import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListAnimalService } from 'src/app/services/list-animal.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Amorinha', type: 'dog', age: 4 },
    { name: 'Garfield', type: 'cat', age: 5 },
    { name: 'Rosa', type: 'bird', age: 7 },
    { name: 'Doginho', type: 'dog', age: 5 },
    { name: 'Tom', type: 'cat', age: 9 },
    { name: 'Jerry', type: 'mouse', age: 9 },
  ];

  animalDetails = '';

  constructor(private listAnimalService: ListAnimalService) {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} de idade.`;
  }

  removeAnimal(animal: Animal){
    this.animals = this.listAnimalService.remove(this.animals, animal)
  }
}
