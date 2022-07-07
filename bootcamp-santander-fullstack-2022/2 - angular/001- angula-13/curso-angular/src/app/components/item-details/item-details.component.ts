import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';

import { ListAnimalService } from 'src/app/services/list-animal.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  animal?: Animal;

  constructor(private listAnimalService: ListAnimalService, private router: ActivatedRoute) { 
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal(){
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.listAnimalService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}