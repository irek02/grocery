import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-common-items',
  templateUrl: './common-items.component.html',
  styleUrls: ['./common-items.component.css']
})
export class CommonItemsComponent implements OnInit {

  @Input() items: any;

  @Output() selectItem: EventEmitter<{ event: MatCheckboxChange, index: number }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
