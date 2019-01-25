import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  meals = [
    {
      name: 'Argentine chimichuri steak',
      ingredients: [
        'lime',
        'grape tomatoes',
        'sweet potatoes',
        'poblano pepper',
        'cilantro',
        'shallot',
        'jelapeno',
        'steak',
        'kale',
      ]
    },
    { name: 'Balsamic fig chicken', ingredients: [] },
    { name: 'Chicken piccata', ingredients: [] },
    { name: 'Creamy chicken tortellini', ingredients: [] },
    { name: 'Moroccan chicken', ingredients: [] },
    { name: 'Pesto chicken', ingredients: [] },
  ];

  previous = [
    'Aluminum foil',
    'Baby spinach',
    'Bacon',
    'Bagels',
    'Baking soda',
    'BBQ sauce',
    'Breakfast meat',
    'bredcrumbs',
    'Butter',
    'Carpet odor',
    'Cereal',
    'Chicken breasts',
    'Chicken wings',
    'coffee',
    'Cream cheese',
    'Cream of chicken',
    'Cream of mushroom',
    'Cucumbers',
    'Decaf coffee',
    'Deodorant',
    'Detergent',
    'Ramen noodles',
    'Rice',
    'Ritz crackers',
    'Rubbing alcohol',
    'Salami',
    'Salt',
    'Sausage',
    'Shampoo',
  ];

  list = [];

  constructor() {
  }

  selectMeal(e: { event: MatCheckboxChange, index: number }) {

    if (e.event.checked) {
      this.addItems(this.meals[e.index].ingredients);
    } else {
      this.removeItems(this.meals[e.index].ingredients);
    }

  }

  selectItem(e: MatCheckboxChange, index: number) {

    if (e.checked) {
      this.addItems([this.previous[index]]);
    } else {
      this.removeItems([this.previous[index]]);
    }

  }

  addItems(items: string[]) {

    items.map(item => this.list.push(item));

    this.list = this.list.sort();

  }

  removeItems(items: string[]) {

    items.map(item => {
      const index = this.list.indexOf(item);
      if (index > -1) {
        this.list.splice(index, 1);
      }
    });

    this.list = this.list.sort();

  }

  copyList(list) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = list.join('\n');
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
