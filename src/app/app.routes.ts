import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {RecipeDetailComponent} from './features/recipe-detail/recipe-detail.component';
import {LoginComponent} from './features/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'detail/:id',
    component: RecipeDetailComponent,
  } ,
  {
    path: 'login',
    component: LoginComponent,
  }
];
