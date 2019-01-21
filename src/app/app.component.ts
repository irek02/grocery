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
}
