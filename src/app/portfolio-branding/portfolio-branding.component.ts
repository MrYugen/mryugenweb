import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-portfolio-branding',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './portfolio-branding.component.html',
  styleUrls: ['./portfolio-branding.component.css']
})
export class PortfolioBrandingComponent {
  isDarkMode = false;

  constructor(private theme: ThemeService) {
    // Al cargar la página, aplica el modo correcto (según localStorage)
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }
}
