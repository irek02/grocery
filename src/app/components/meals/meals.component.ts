import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  @Input() meals: any[];

  @Output() selectMeal: EventEmitter<{ event: MatCheckboxChange, index: number}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
