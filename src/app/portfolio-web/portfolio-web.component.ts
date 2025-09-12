import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './portfolio-web.component.html',
  styleUrls: ['./portfolio-web.component.css']
})

export class PortfolioWebComponent implements OnInit, OnDestroy, AfterViewInit {
  isDarkMode = false;

  webSteps = [
    {
      title: '1. Planificación',
      text: 'En esta primera fase se definen los cimientos del proyecto. Se recaban los requisitos del cliente o de la idea, estableciendo objetivos claros para el sitio web. Aquí se decide la estructura de contenidos, se elabora un mapa del sitio y se bosquejan los primeros wireframes (esquemas de página) para visualizar la distribución de elementos. Una buena planificación implica investigar la audiencia y la competencia, anticipando las funcionalidades necesarias antes de escribir una sola línea de código.',
      image: 'assets/images/web/planificacion_web.png'
    },
    {
      title: '2. Diseño',
      text: 'Con la planificación en mano, sigue la fase de diseño visual. Aquí se transforma la estrategia en una identidad gráfica: se eligen paletas de colores, tipografías y estilos que reflejen la marca o personalidad del proyecto. El diseñador crea maquetas o prototipos de cada página, definiendo la apariencia de botones, galerías, textos e imágenes. Es un proceso creativo donde se busca el equilibrio entre estética y usabilidad, asegurando que el sitio sea atractivo pero también fácil de navegar. Los detalles de UX (experiencia de usuario) son pulidos para guiar al visitante intuitivamente por el contenido.',
      image: 'assets/images/web/diseño_web.png'
    },
    {
      title: '3. Desarrollo',
      text: 'Una vez aprobado el diseño, comienza el desarrollo. En esta etapa se escribe el código que dará vida al sitio. Los desarrolladores construyen el front-end a partir del diseño (creando las páginas con HTML, CSS y JavaScript o utilizando frameworks), y configuran la lógica del back-end si la web lo requiere (servidores, bases de datos). Es un proceso metódico: se integran todas las piezas, se realizan pruebas internas y se corrigen errores. Poco a poco, el sitio web pasa de un conjunto de diseños estáticos a una aplicación web funcional. La colaboración entre diseño y desarrollo es crucial aquí, ajustando detalles para que la versión final sea fiel al look & feel planeado y funcione de manera fluida.',
      image: 'assets/images/web/desarrollo_web.png'
    },
    {
      title: '4. Lanzamiento',
      text: 'El paso final es el lanzamiento del sitio web. Tras varias rondas de pruebas y ajustes, llega el momento de poner el proyecto online. Se despliega la web en un servidor o plataforma de hosting, configurando el dominio para que sea accesible al público. Esta etapa incluye pruebas finales de rendimiento y asegurarse de que todo (formularios, enlaces, funciones) opere correctamente en producción. El lanzamiento se vive con emoción: es como ver despegar un cohete después de mucho trabajo. Una vez en línea, el sitio comienza su vida real con usuarios reales. Además, se consideran planes de mantenimiento futuro, backups y posibles mejoras, sabiendo que una web exitosa evoluciona constantemente incluso después de su lanzamiento.',
      image: 'assets/images/web/lanzamiento_web.png'
    }
  ];

  webProjects = [
    {
      title: 'Estévez Asesores - Página Web Corporativa',
      summary: 'Sitio corporativo responsivo con diseño minimalista creado desde cero como una Single Page Application (SPA) con Angular 17 y TypeScript.',
      slug: 'estevez-asesores',
      images: [
        'assets/images/web/estevez_web.jpg',
        'assets/images/web/estevez_web2.jpg',
        'assets/images/web/estevez_web3.jpg'
      ]
    },
    {
      title: 'Mr. Yugen - CV, Portfolio, Blog y Servicios Web',
      summary: 'Single Page Application (SPA) con Angular 17 y TypeScript, con diseño responsivo y modo oscuro/claro.',
      slug: 'mr-yugen',
      images: [
        'assets/images/web/mryugen_web.jpg',
        'assets/images/web/mryugen_web2.jpg',
        'assets/images/web/mryugen_web3.jpg'
      ]
    },
    {
      title: 'Couple Clash - Landing Page moderna para presentación de juego de mesa',
      summary: 'Landing Page moderna para la presentación de un juego de mesa, creada con No-Code tools y adaptada para SEO.',
      slug: 'couple-clash',
      images: [
        'assets/images/web/couple_clash_web.jpg',
        'assets/images/web/couple_clash_web2.jpg',
        'assets/images/web/couple_clash_web3.jpg'
      ]
    }
  ];

  currentImageIndexes: number[] = [];
  imageFadeState: boolean[] = [];
  private carouselIntervals: any[] = [];

  currentStep = 0;
  private startX = 0;

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  ngOnInit() {
    this.currentImageIndexes = this.webProjects.map(() => 0);
    this.imageFadeState = this.webProjects.map(() => true);
    this.webProjects.forEach((_, i) => {
      const interval = setInterval(() => this.fadeImage(i), 20000 + i * 500);
      this.carouselIntervals.push(interval);
    });
  }

  ngAfterViewInit() {
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100px',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });

    gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100px',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });

    ScrollTrigger.refresh();
  }

  ngOnDestroy() {
    this.carouselIntervals.forEach(id => clearInterval(id));
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  fadeImage(i: number) {
    this.imageFadeState[i] = false;
    setTimeout(() => {
      this.currentImageIndexes[i] = (this.currentImageIndexes[i] + 1) % this.webProjects[i].images.length;
      this.imageFadeState[i] = true;
    }, 250);
  }
  prevImage(i: number) {
    this.imageFadeState[i] = false;
    setTimeout(() => {
      this.currentImageIndexes[i] = (this.currentImageIndexes[i] - 1 + this.webProjects[i].images.length) % this.webProjects[i].images.length;
      this.imageFadeState[i] = true;
    }, 250);
  }
  nextImage(i: number) {
    this.imageFadeState[i] = false;
    setTimeout(() => {
      this.currentImageIndexes[i] = (this.currentImageIndexes[i] + 1) % this.webProjects[i].images.length;
      this.imageFadeState[i] = true;
    }, 250);
  }

  onCardTouchStart(event: TouchEvent, i: number) { this.startX = event.touches[0].clientX; }
  onCardTouchEnd(event: TouchEvent, i: number) {
    const delta = event.changedTouches[0].clientX - this.startX;
    if (delta > 50) this.prevImage(i);
    if (delta < -50) this.nextImage(i);
  }

  prevSlide() { this.currentStep = this.currentStep > 0 ? this.currentStep - 1 : this.webSteps.length - 1; }
  nextSlide() { this.currentStep = this.currentStep < this.webSteps.length - 1 ? this.currentStep + 1 : 0; }
  goToSlide(index: number) { this.currentStep = index; }
  onTouchStart(event: TouchEvent) { this.startX = event.touches[0].clientX; }
  onTouchEnd(event: TouchEvent) {
    const delta = event.changedTouches[0].clientX - this.startX;
    if (delta > 50) this.prevSlide();
    if (delta < -50) this.nextSlide();
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }
}