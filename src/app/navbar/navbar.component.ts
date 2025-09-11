import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() isDarkMode: boolean = false;
  mobileOpen = false;

  @Output() toggleTheme = new EventEmitter<void>();
  
  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }
}
