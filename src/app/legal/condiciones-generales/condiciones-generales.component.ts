import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MobileNavbarComponent } from '../../mobile-navbar/mobile-navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { ScrollToTopComponent } from '../../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-condiciones-generales',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MobileNavbarComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './condiciones-generales.component.html'
})
export class CondicionesGeneralesComponent {
  isDarkMode = false;
  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }
  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }
}