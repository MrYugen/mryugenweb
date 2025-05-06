import { Component } from '@angular/core';
// Trae CommonModule para ngIf, pipes (date…), *ngFor…
import { CommonModule } from '@angular/common';
// Trae RouterModule para routerLink, router-outlet…
import { RouterModule } from '@angular/router';
// Trae FormsModule para ngModel, ngSubmit, ngForm…
import { FormsModule } from '@angular/forms';

import { ThemeService } from '../services/theme.service';

// 1) Define un tipo / interfaz para tus posts
export interface BlogPost {
  title: string;
  date: string;  // Puede ser string ISO (“2025-05-06”) o Date
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [                       // <-- aquí le dices qué módulos usar
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Fichero de estilos locales
})
export class HomeComponent {
  mobileOpen = false;  // Control del menú hamburguesa
  isDarkMode = false;  // Estado del tema

  // Datos de portfolio (puedes ampliarlos o trayéndolos de un API/CMS)
  portfolioItems = [
    { title: 'Branding', description: 'Diseño de logos y marca.', link: '/portfolio/branding' },
    { title: 'Ilustración Digital', description: 'Concept art e ilustraciones.', link: '/portfolio/illustration' },
    { title: 'Páginas Web', description: 'Webs a medida.', link: '/portfolio/websites' },
    { title: 'Couple Clash', description: 'Juego de mesa original.', link: '/portfolio/couple-clash' },
  ];

// <-- aquí le dices a TS que latestPosts es un array de BlogPost
  latestPosts: BlogPost[] = [
    // Opcionalmente ya puedes meter datos de ejemplo para verlos en pantalla
    { title: 'Lanzamiento de la web',    date: '2025-05-01' },
    { title: 'Nuevas animaciones GSAP', date: '2025-04-25' },
    { title: 'Integración con CMS',     date: '2025-04-10' }
  ];

  constructor(private theme: ThemeService) {
    // Inicializa el tema según lo guardado en localStorage
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
     // Cambia tema y actualiza la variable para que Angular actualice las clases
    this.isDarkMode = this.theme.toggle();
  }

  onSubmit() {
    // lógica para envío de formulario
    // TODO: implementar envío de formulario de contacto (llamar a tu backend o servicio)
    console.log('Enviar formulario de contacto');
  }
}
