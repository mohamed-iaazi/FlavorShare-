import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './features/navbar/navbar.component';
import {FooterComponent} from './features/footer/footer.component';
import {LoginComponent} from './features/login/login.component';
import {HomeComponent} from './features/home/home.component';
import {RecipeDetailComponent} from './features/recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, FormsModule, NavbarComponent, FooterComponent, LoginComponent, HomeComponent, RecipeDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlavorShare';
  isMenuOpen: boolean=false;
  email: any;
  password: any;

  selectedMealId = '52772';


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  login() {

  }
}
