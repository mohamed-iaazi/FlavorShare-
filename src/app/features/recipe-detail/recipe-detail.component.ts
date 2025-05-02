import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [NgForOf],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() mealId!: string;
  mealImage = '';
  mealTitle = '';  // Now mealTitle will be fetched from API
  instructions: string[] = [];
  ingredients: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.mealId) {
      this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`)
        .subscribe(res => {
          const meal = res.meals?.[0];
          if (meal) {
            this.mealImage = meal.strMealThumb;
            this.mealTitle = meal.strMeal;  // Set the meal title from the API response

            // Break instructions into steps
            this.instructions = meal.strInstructions
              ?.split('. ')
              .filter((step: string) => step.trim().length > 0)
              .map((step: string) => step.trim() + '.');

            // Collect ingredients
            this.ingredients = [];
            for (let i = 1; i <= 20; i++) {
              const ing = meal[`strIngredient${i}`];
              if (ing) this.ingredients.push(ing);
            }
          }
        });
    }
  }
}
