import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meals = [
    'Argentine chimichuri steak',
    'Balsamic fig chicken',
    'Chicken piccata',
    'Creamy chicken tortellini',
    'Moroccan chicken',
    'Pesto chicken',
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
}
