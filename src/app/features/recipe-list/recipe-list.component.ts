import {Component, inject, OnInit} from '@angular/core';
import {Meal} from '../../models/meal';
import {RecipeServiceService} from '../../core/services/recipe-service.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [
    FormsModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  meals: Meal[] = [];

  mealService=inject(RecipeServiceService)


  ngOnInit(): void {
    this.loadAllMeals();
  }

  loadAllMeals(): void {
    this.mealService.getAllMeals().subscribe((data) => {
      this.meals = data;
    });
  }
}
