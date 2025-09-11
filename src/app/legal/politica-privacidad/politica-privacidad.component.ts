import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { ScrollToTopComponent } from '../../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-politica-privacidad',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './politica-privacidad.component.html'
})
export class PoliticaPrivacidadComponent {
  isDarkMode = false;
  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }
  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }
}