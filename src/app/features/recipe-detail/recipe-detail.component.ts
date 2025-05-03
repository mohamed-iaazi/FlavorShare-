import {Component, inject, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  mealId!: string;
  mealImage = '';
  mealTitle = '';  // Now mealTitle will be fetched from API
  instructions: string[] = [];
  ingredients: string[] = [];
  activatedRoute =inject(ActivatedRoute);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.mealId=this.activatedRoute.snapshot.params['id'];


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

  comment = {
    name: '',
    message: ''
  };

  allComments: { [key: string]: { name: string; message: string }[] } = {};

  submitComment(): void {
    if (!this.comment.name || !this.comment.message) return;

    if (!this.allComments[this.mealId]) {
      this.allComments[this.mealId] = [];
    }

    this.allComments[this.mealId].push({ ...this.comment });

    this.comment = { name: '', message: '' };
  }

  get currentComments() {
    return this.allComments[this.mealId] || [];
  }
}
