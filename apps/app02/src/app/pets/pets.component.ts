import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from '@nx02/core-data';

@Component({
  selector: 'nx02-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets$;

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.getPets()
  }

  getPets() {
    this.pets$ = this.petsService.getPets();
  }

}
