import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// Trae CommonModule para ngIf, pipes (date…), *ngFor…
import { CommonModule } from '@angular/common';
// Trae RouterModule para routerLink, router-outlet…
import { RouterModule } from '@angular/router';
// Trae FormsModule para ngModel, ngSubmit, ngForm…
import { FormsModule } from '@angular/forms';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import { ThemeService } from '../services/theme.service';
gsap.registerPlugin(ScrollTrigger);

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
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroHeading') heroHeading!: ElementRef<HTMLHeadingElement>;
  @ViewChild('heroButton')  heroButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('aboutImage') aboutImage!: ElementRef<HTMLImageElement>;
  @ViewChild('aboutText')  aboutText!: ElementRef<HTMLDivElement>;

  mobileOpen = false;  // Control del menú hamburguesa
  isDarkMode = false;  // Estado del tema

  // Datos de portfolio (puedes ampliarlos o trayéndolos de un API/CMS)
  portfolioItems = [
    { title: 'Branding', description: 'Diseño de logos, identidad visual y creación de marca.', link: '/portfolio/branding' },
    { title: 'Ilustración Digital', description: 'Desde concept art hasta ilustraciones por encargo.', link: '/portfolio/illustration' },
    { title: 'Páginas Web', description: 'Diseño web a medida con la mejor experiencia de usuario.', link: '/portfolio/websites' },
    { title: 'Couple Clash', description: '5 años de trabajo plasmados en este original juego de mesa', link: '/portfolio/couple-clash' },
  ];

// <-- aquí le dices a TS que latestPosts es un array de BlogPost
  latestPosts: BlogPost[] = [
    // Opcionalmente ya puedes meter datos de ejemplo para verlos en pantalla
    { title: '#1 El inicio de todo: Mi Odisea Creativa',    date: '2024-08-06' },
    { title: '#2 Errores comunes al diseñar un juego de mesa (Parte 1)', date: '2024-09-25' },
    { title: '#3 Errores comunes al diseñar un juego de mesa (Parte 2)',     date: '2024-10-10' }
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
  ngAfterViewInit() {
    // Animación suave de entrada
  gsap.registerPlugin(ScrollTrigger);
  // Revelado de sección "About"
    gsap.from(this.aboutImage.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutImage.nativeElement,
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 1
    });
    gsap.from(this.aboutText.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutText.nativeElement,
        start: 'top 80%',
      },
      x: 50,
      opacity: 0,
      duration: 1
    });
  gsap.to('.hero', {
    backgroundPosition: '50% 80%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  });
    gsap.from(this.heroHeading.nativeElement, {
      opacity: 0,
      y: -40,
      duration: 3,
      ease: 'power3.out'
    });
  }
}

  