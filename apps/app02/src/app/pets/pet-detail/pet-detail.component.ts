import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '@nx02/core-data';

@Component({
  selector: 'nx02-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {

  currentPet: Pet;
  originalTitle;

  @Input() set pet(value) {
    if (value) this.originalTitle = value.title;
    this.currentPet = Object.assign({}, value);
  };

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
