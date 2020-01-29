import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pet } from '@nx02/core-data';

@Component({
  selector: 'nx02-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() pets: Pet[];
  @Input() readonly = false;

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
