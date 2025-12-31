import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';
import { prefersReducedMotion } from '../utils/motion.utils';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    MobileNavbarComponent,
    HeroComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './portfolio-web.component.html',
  styleUrls: ['./portfolio-web.component.css']
})
export class PortfolioWebComponent implements OnInit, OnDestroy, AfterViewInit {
  isDarkMode = false;
  
  // Estado para la sección "Metodología"
  activeStep = 0;

  // Datos limpios para el diseño moderno
  webSteps = [
    {
      title: 'Planificación',
      text: 'En esta primera fase se definen los cimientos del proyecto. Se recaban los requisitos del cliente o de la idea, estableciendo objetivos claros para el sitio web. Aquí se decide la estructura de contenidos, se elabora un mapa del sitio y se bosquejan los primeros wireframes para visualizar la distribución de elementos. Una buena planificación implica investigar la audiencia y la competencia, anticipando las funcionalidades necesarias antes de escribir una sola línea de código.',
      image: 'assets/images/web/planificacion_web.png'
    },
    {
      title: 'Diseño UI/UX',
      text: 'Con la planificación en mano, sigue la fase de diseño visual. Aquí se transforma la estrategia en una identidad gráfica: se eligen paletas de colores, tipografías y estilos que reflejen la marca. El diseñador crea prototipos de alta fidelidad, definiendo la apariencia de cada componente. Es un proceso creativo donde se busca el equilibrio entre estética y usabilidad, asegurando que el sitio sea atractivo pero también fácil de navegar e intuitivo.',
      image: 'assets/images/web/diseño_web.png'
    },
    {
      title: 'Desarrollo',
      text: 'Una vez aprobado el diseño, comienza la magia del código. Construyo el front-end utilizando tecnologías modernas (HTML5, Tailwind CSS, Angular) asegurando un diseño responsive y accesible. Se integra la lógica del back-end si es necesario y se optimiza el rendimiento. Es un proceso metódico de construcción e integración donde el diseño estático cobra vida y se vuelve funcional e interactivo.',
      image: 'assets/images/web/desarrollo_web.png'
    },
    {
      title: 'Lanzamiento',
      text: 'El paso final es el despliegue. Tras rondas exhaustivas de testing (QA), se sube el proyecto al servidor de producción. Se configura el dominio, el SSL y se realizan pruebas finales de rendimiento y SEO. Pero el trabajo no acaba aquí: una web exitosa requiere monitorización y evolución constante. ¡Es hora de compartir tu proyecto con el mundo!',
      image: 'assets/images/web/lanzamiento_web.png'
    }
  ];

  webProjects = [
    {
      title: 'Mr. Yugen Portfolio',
      summary: 'Web personal diseñada y desarrollada desde cero. Single Page Application (SPA) con Angular 17, Tailwind CSS y animaciones GSAP. Cuenta con modo oscuro, diseño totalmente responsive y una arquitectura de componentes reutilizables.',
      slug: 'mr-yugen',
      images: [
        'assets/images/web/mryugen_web2.jpg',
        'assets/images/web/mryugen_web.jpg',
        'assets/images/web/mryugen_web3.jpg'
      ]
    },
  ];

  // Control de Hover en Proyectos
  currentImageIndexes: number[] = [];
  private hoverIntervals: any[] = [];

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  ngOnInit() {
    this.currentImageIndexes = this.webProjects.map(() => 0);
  }

  ngAfterViewInit() {
    if (prefersReducedMotion()) return;

    // Animaciones de entrada
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%'
        }
      });
    });

    // Stagger para las tarjetas
    ScrollTrigger.batch('.reveal-card', {
      onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      }),
      start: 'top 90%'
    });
  }

  ngOnDestroy() {
    this.stopAllHovers();
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }

  // Lógica Grid Asimétrico
  isFeatured(index: number): boolean {
    return index % 3 === 0; // El primero (0) siempre será destacado (grande)
  }

  // Lógica Hover
  startProjectHover(index: number) {
    this.stopProjectHover(index);
    this.hoverIntervals[index] = setInterval(() => {
      this.currentImageIndexes[index] = 
        (this.currentImageIndexes[index] + 1) % this.webProjects[index].images.length;
    }, 900);
  }

  stopProjectHover(index: number) {
    if (this.hoverIntervals[index]) {
      clearInterval(this.hoverIntervals[index]);
      this.hoverIntervals[index] = null;
    }
  }

  private stopAllHovers() {
    this.hoverIntervals.forEach(interval => {
      if (interval) clearInterval(interval);
    });
  }
}