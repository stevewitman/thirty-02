import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from '@nx02/core-data';

@Component({
  selector: 'nx02-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets$;
  selectedPet: Pet;

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.getPets();
    this.resetPet();
  }

  getPets() {
    this.pets$ = this.petsService.getPets();
  }

  selectPet(pet) {
    this.selectedPet = pet;
  }

  resetPet() {
    const emptyPet: Pet = {
      id: null,
      title: '',
      details: ''
    }
    this.selectPet(emptyPet);
  }

  updatePet(pet) {
    this.petsService.updatePet(pet)
      .subscribe(result => {
        this.getPets();
        this.resetPet();
      });
  }

  createPet(pet) {
    this.petsService.createPet(pet)
      .subscribe(result => {
        this.getPets();
        this.resetPet();
      });
  }

  deletePet(pet) {
    this.petsService.deletePet(pet.id)
      .subscribe(result => this.getPets());
  }

  savePet(pet) {
    if (!pet.id) {
      this.createPet(pet);
    } else {
      this.updatePet(pet);
    }
  }

  cancel() {
    this.resetPet();
  }

}
