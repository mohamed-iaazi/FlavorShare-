import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [
    NgForOf
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent  implements OnInit {
  @Input() mealId!: string;
  ingredients: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.mealId) {
      this.http
        .get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`)
        .subscribe(res => {
          const meal = res.meals[0];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            if (ingredient) {
              this.ingredients.push(ingredient);
            }
          }
        });
    }
  }
}
