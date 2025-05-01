import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlavorShare';
  isMenuOpen: boolean=false;
  email: any;
  password: any;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  login() {

  }
}
