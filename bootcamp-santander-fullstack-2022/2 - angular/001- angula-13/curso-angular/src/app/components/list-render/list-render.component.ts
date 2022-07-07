import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListAnimalService } from 'src/app/services/list-animal.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listAnimalService: ListAnimalService) {
    this.getAnimals()
  }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} de idade.`;
  }

  removeAnimal(animal: Animal){
    this.animals =  this.animals.filter((a) => animal.name !== a.name);
    this.listAnimalService.remove(animal.id).subscribe();
  }

  getAnimals(): void{
    this.listAnimalService.getAll().subscribe((animals) => this.animals = animals);
  }
}
