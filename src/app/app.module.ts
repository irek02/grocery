import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { MealsComponent } from './components/meals/meals.component';
import { CommonItemsComponent } from './components/common-items/common-items.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { MealAddComponent } from './components/meal-add/meal-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MealsComponent,
    CommonItemsComponent,
    ShoppingListComponent,
    MealAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
