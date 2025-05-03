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
  searchTerm: string = '';

  constructor(private mealService: RecipeServiceService) {}

  ngOnInit(): void {
    this.loadAllMeals();
  }

  loadAllMeals(): void {
    this.mealService.getAllMeals().subscribe((data) => {
      this.meals = data;
    });
  }

  filteredMeals(): Meal[] {
    if (!this.searchTerm.trim()) return this.meals;
    const term = this.searchTerm.toLowerCase();
    return this.meals.filter(meal =>
      meal.strMeal.toLowerCase().includes(term)
    );
  }
}
