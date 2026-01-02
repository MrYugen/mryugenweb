import { Component, AfterViewInit, ViewChild, QueryList, ElementRef, ViewChildren, OnDestroy, OnInit } from '@angular/core';
// Trae CommonModule para ngIf, pipes (date…), *ngFor…
import { CommonModule } from '@angular/common';
// Trae RouterModule para routerLink, router-outlet…
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
// Trae FormsModule para ngModel, ngSubmit, ngForm…
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../utils/motion.utils';

import { ThemeService } from '../services/theme.service';
import { BlogService, BlogPost } from '../services/blog.service';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  id: 'branding'|'illustration'|'web'|'couple';
  title: string;
  description: string;
  link: string;
  images: string[];
  currentIndex: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule, HttpClientModule,
    NavbarComponent, MobileNavbarComponent, HeroComponent, FooterComponent, ScrollToTopComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  isDarkMode = false;
  latestPosts: BlogPost[] = [];
  
  // Portfolio Data
  portfolioItems: PortfolioItem[] = [
    {
      id: 'branding',
      title: 'Branding',
      description: 'Identidades visuales con alma y estrategia.',
      link: '/portfolio/branding',
      images: ['assets/images/selu_mockup2.jpg', 'assets/images/portfolio_branding.png', 'assets/images/portfolio_branding3.png'], // Asegúrate que existan
      currentIndex: 0
    },
        {
      id: 'illustration',
      title: 'Ilustración',
      description: 'Arte digital para contar historias únicas.',
      link: '/portfolio/illustration',
      images: ['assets/images/IlustracionesPorfolio.png', 'assets/images/IlustracionesPorfolio2.png', 'assets/images/IlustracionesPorfolio3.png'],
      currentIndex: 0
    },
    {
      id: 'web',
      title: 'Web Dev',
      description: 'Sitios web rápidos, modernos y escalables.',
      link: '/portfolio/web',
      images: ['assets/images/portfolio_web.png', 'assets/images/portfolio_web2.png', 'assets/images/portfolio_web3.png'],
      currentIndex: 0
    },
    {
      id: 'couple',
      title: 'Couple Clash',
      description: 'Creación integral de un juego de mesa.',
      link: '/under-construction',
      images: ['assets/images/CoupleClashPorfolio.png', 'assets/images/CoupleClashPorfolio2.png', 'assets/images/CoupleClashPorfolio3.png'],
      currentIndex: 0
    }
  ];

  // Hover Control
  private hoverIntervals: any[] = []; 

  // Contact Form
  contactName = '';
  contactEmail = '';
  contactMessage = '';
  submitting = false;
  success = '';
  error = '';

  constructor(
    private themeService: ThemeService,
    private blogService: BlogService,
    private http: HttpClient
  ) {
    this.isDarkMode = this.themeService.isDark();
    this.latestPosts = this.blogService.getPosts().slice(0, 3);
  }

  ngOnInit() {}

  toggleTheme() {
    this.isDarkMode = this.themeService.toggle();
  }

  ngAfterViewInit() {
    if (prefersReducedMotion()) return;
    this.initAnimations();
  }

  initAnimations() {
    // 1. Reveal Sections (Fade Up suave)
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // 2. Stagger para Skills (Efecto cascada)
    ScrollTrigger.batch('.skill-card', {
      onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }),
      start: 'top 90%'
    });
  }

  // --- LOGICA PORTFOLIO HOVER (Optimizada) ---
  startPortfolioHover(index: number) {
    this.stopPortfolioHover(index); // Limpiar por si acaso
    // Cambiar imagen cada 1s solo si el mouse está encima
    this.hoverIntervals[index] = setInterval(() => {
      this.portfolioItems[index].currentIndex = 
        (this.portfolioItems[index].currentIndex + 1) % this.portfolioItems[index].images.length;
    }, 1000);
  }

  stopPortfolioHover(index: number) {
    if (this.hoverIntervals[index]) {
      clearInterval(this.hoverIntervals[index]);
      this.hoverIntervals[index] = null;
    }
    // Opcional: Volver a la portada al salir
    // this.portfolioItems[index].currentIndex = 0; 
  }

  ngOnDestroy() {
    this.hoverIntervals.forEach(i => clearInterval(i));
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  onSubmit(form: NgForm) {
    if (form.invalid || this.submitting) return;
    this.submitting = true;
    this.success = '';
    this.error = '';

    this.http.post('/contacto.php', form.value, { responseType: 'text' as const }) // <- API devuelve texto
      .subscribe({
        next: (text) => {
          const t = (text || '').trim();
          if (t === 'OK') {
            this.success = '¡Gracias! Te responderé muy pronto.';
            form.resetForm();
          } else {
            this.error = 'Error inesperado: ' + t;
          }
          this.submitting = false;
        },
        error: (err) => {
          this.error = typeof err?.error === 'string' ? err.error : 'Error del servidor';
          this.submitting = false;
        }
      });
  }
}
