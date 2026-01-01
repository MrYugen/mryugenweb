import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
  animations: [
    // Animación de despliegue vertical para abrir/cerrar el menú
    trigger('openClose', [
      transition(':enter', [ // animación al abrir (elemento entra al DOM)
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: 'calc(100vh - 4rem)', opacity: 1 }))
      ]),
      transition(':leave', [ // animación al cerrar (elemento sale del DOM)
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class MobileNavbarComponent {
  @Input() isDarkMode: boolean = false;
  @Output() toggleTheme = new EventEmitter<void>();

  menuOpen: boolean = false;
  portfolioOpen: boolean = false; // Estado del acordeón

  /** Alterna el estado abierto/cerrado del menú móvil */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.portfolioOpen = false; // Resetear acordeón al cerrar
  }

  togglePortfolio(): void {
    this.portfolioOpen = !this.portfolioOpen;
  }

  /** Cierra el menú (se invoca al hacer clic en un enlace) */
  closeMenu(): void {
    this.menuOpen = false;
    this.portfolioOpen = false;
  }
}
