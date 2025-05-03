import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './features/navbar/navbar.component';
import {FooterComponent} from './features/footer/footer.component';
import {LoginComponent} from './features/login/login.component';
import {HomeComponent} from './features/home/home.component';
import {RecipeDetailComponent} from './features/recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NavbarComponent, FooterComponent, HomeComponent, RecipeDetailComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FlavorShare';
  isMenuOpen: boolean=false;
  email: any;
  password: any;

  selectedMealId = '52772';
  showSplash: boolean=true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;
    }, 4000); // Splash duration: 3 seconds
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  login() {

  }
}
