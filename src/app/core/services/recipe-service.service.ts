import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, map, Observable} from 'rxjs';
import {Meal} from '../../models/meal';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {


  constructor(private http: HttpClient) {}

  getAllMeals(): Observable<Meal[]> {
    return this.http.get<{ meals: Meal[] }>(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
    ).pipe(
      // Optional: if you want to return just the meal array
      map(response => response.meals || [])
    );
  }
}
