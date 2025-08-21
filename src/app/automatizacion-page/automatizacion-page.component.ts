import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { HeroComponent } from '../hero/hero.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-automatizacion-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ScrollToTopComponent, HeroComponent],
  templateUrl: './automatizacion-page.component.html',
  styleUrl: './automatizacion-page.component.css'
})
export class AutomatizacionPageComponent implements OnInit {
  mobileOpen = false;
  isDarkMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.themeService.toggle();
  }
}