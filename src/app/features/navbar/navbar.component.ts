import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  title = 'FlavorShare';
  isMenuOpen: boolean=false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
