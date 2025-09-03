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
      text: 'Definición de objetivos, público y arquitectura de la información del sitio.',
      image: 'assets/images/portfolio_web.png'
    },
    {
      title: '2. Diseño',
      text: 'Creación de wireframes y prototipos visuales centrados en la experiencia de usuario.',
      image: 'assets/images/portfolio_web2.png'
    },
    {
      title: '3. Desarrollo',
      text: 'Implementación del diseño con tecnologías modernas y código optimizado.',
      image: 'assets/images/portfolio_web3.png'
    },
    {
      title: '4. Lanzamiento',
      text: 'Pruebas finales, despliegue y seguimiento del rendimiento del sitio.',
      image: 'assets/images/proyecto1_img1.jpg'
    }
  ];

  webProjects = [
    {
      title: 'Project Alpha',
      summary: 'Sitio corporativo responsivo con diseño minimalista.',
      slug: 'project-alpha',
      images: [
        'assets/images/portfolio_web.png',
        'assets/images/portfolio_web2.png',
        'assets/images/portfolio_web3.png'
      ]
    },
    {
      title: 'Project Beta',
      summary: 'Landing page dinámica para promoción de servicios.',
      slug: 'project-beta',
      images: [
        'assets/images/proyecto1_img1.jpg',
        'assets/images/proyecto1_img2.jpg',
        'assets/images/proyecto1_img3.jpg'
      ]
    },
    {
      title: 'Project Gamma',
      summary: 'Plataforma web con panel de administración personalizado.',
      slug: 'project-gamma',
      images: [
        'assets/images/proyecto2_img1.jpg',
        'assets/images/proyecto2_img2.jpg',
        'assets/images/proyecto2_img3.jpg'
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
  onTouchStart(event: TouchEvent) { this.startX = event.touches[0].clientX; }
  onTouchEnd(event: TouchEvent) {
    const delta = event.changedTouches[0].clientX - this.startX;
    if (delta > 50) this.prevSlide();
    if (delta < -50) this.nextSlide();
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }
}