import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {RecipeListComponent} from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    RecipeListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



}
