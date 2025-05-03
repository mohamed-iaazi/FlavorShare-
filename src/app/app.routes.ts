import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {RecipeDetailComponent} from './features/recipe-detail/recipe-detail.component';
import {LoginComponent} from './features/login/login.component';
import {CommingSoonComponent} from './features/comming-soon/comming-soon.component';

let comingSoonPaths=['service' ,"contact", 'about'];
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
  } ,

  ...comingSoonPaths.map(( path : any) => ({ path, component: CommingSoonComponent }))
];
