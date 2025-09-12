import { Component, AfterViewInit, ViewChild, QueryList, ElementRef, ViewChildren, OnDestroy, OnInit } from '@angular/core';
// Trae CommonModule para ngIf, pipes (date…), *ngFor…
import { CommonModule } from '@angular/common';
// Trae RouterModule para routerLink, router-outlet…
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
// Trae FormsModule para ngModel, ngSubmit, ngForm…
import { FormsModule } from '@angular/forms';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import { ThemeService } from '../services/theme.service';
import { BlogService, BlogPost } from '../services/blog.service';
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
  imports: [                       // <-- aquí le dices qué módulos usar
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ScrollToTopComponent,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Fichero de estilos locales
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroHeading') heroHeading!: ElementRef<HTMLHeadingElement>;
  @ViewChild('heroButton')  heroButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('aboutImage', { static: false }) aboutImage!: ElementRef<HTMLImageElement>;
  @ViewChild('aboutText', { static: false }) aboutText!: ElementRef<HTMLDivElement>;
  @ViewChildren('portfolioCard') portfolioCards!: QueryList<ElementRef>;
  @ViewChild('parallaxBg', { static: false }) parallaxBg!: ElementRef<HTMLDivElement>;
  @ViewChild('contactLeft', { static: false }) contactLeft!: ElementRef;
  @ViewChild('contactRight', { static: false }) contactRight!: ElementRef;

  private startX = 0;
  private intervals: any[] = [];

  isDarkMode = false;  // Estado del tema

  onPointerDown(e: PointerEvent) {
    this.startX = e.clientX;
  }

  onPointerUp(e: PointerEvent, item: PortfolioItem) {
    const delta = e.clientX - this.startX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? this.nextImage(item) : this.prevImage(item);
    }
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Datos de portfolio (puedes ampliarlos o trayéndolos de un API/CMS)
    portfolioItems: PortfolioItem[] = [
    {
      id: 'branding',
      title: 'Branding',
      description: 'Diseño de logos, identidad visual, creación de marca y merchandising.',
      link: '/portfolio/branding',
      images: [
        'assets/images/portfolio_branding.png',
        'assets/images/portfolio_branding2.png',
        'assets/images/portfolio_branding3.png'
      ],
      currentIndex: 0
    },
    {
      id: 'illustration',
      title: 'Ilustración Digital',
      description: 'Desde concept art hasta ilustraciones por encargo con cualquier estilo.',
      link: '/portfolio/illustration',
      images: [
        'assets/images/IlustracionesPorfolio.png',
        'assets/images/IlustracionesPorfolio2.png',
        'assets/images/IlustracionesPorfolio3.png'
      ],
      currentIndex: 0
    },
    {
      id: 'web',
      title: 'Proyectos Web',
      description: 'Proyectos web a medida con la mejor experiencia de usuario.',
      link: '/portfolio/web',
      images: [
        'assets/images/portfolio_web.png',
        'assets/images/portfolio_web2.png',
        'assets/images/portfolio_web3.png'
      ],
      currentIndex: 0
    },
    {
      id: 'couple',
      title: 'Couple Clash',
      description:
        '5 años de trabajo plasmados en este original juego de mesa.',
      link: '/under-construction',
      images: [
        'assets/images/CoupleClashPorfolio.png',
        'assets/images/CoupleClashPorfolio2.png',
        'assets/images/CoupleClashPorfolio3.png'
      ],
      currentIndex: 0
    },
  ];

  latestPosts: BlogPost[] = [];

  nextImage(item: PortfolioItem) {
    item.currentIndex = (item.currentIndex + 1) % item.images.length;
  }

  prevImage(item: PortfolioItem) {
    item.currentIndex =
      (item.currentIndex - 1 + item.images.length) % item.images.length;
  }

  constructor(private theme: ThemeService, private blogService: BlogService) {
    // Inicializa el tema según lo guardado en localStorage
    this.isDarkMode = this.theme.isDark();
  }

  ngOnInit(): void {
    this.latestPosts = this.blogService.getPosts().slice(0, 3);
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
  // Limpia cualquier intervalo anterior por si acaso
  this.intervals.forEach(id => clearInterval(id));
  this.intervals = [];

  gsap.registerPlugin(ScrollTrigger);

    // About Image Animation
    if (this.aboutImage) {
      gsap.from(this.aboutImage.nativeElement, {
        scrollTrigger: {
          trigger: this.aboutImage.nativeElement,
          start: 'top 80%',
          once: true, // Solo una vez al hacer scroll
        },
        x: -50,
        opacity: 0,
        duration: 1
      });
    }

    // About Text Animation
    if (this.aboutText) {
      gsap.from(this.aboutText.nativeElement, {
        scrollTrigger: {
          trigger: this.aboutText.nativeElement,
          start: 'top 80%',
          once: true, // Solo una vez al hacer scroll
        },
        x: 50,
        opacity: 0,
        duration: 1
      });
    }

    // Skills Animation
    gsap.utils.toArray<HTMLElement>('.skills-card').forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // Portfolio Animation
    gsap.utils.toArray<HTMLElement>('.portfolio-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      delay: i * 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',   
        toggleActions: 'play none none none',
        once: true
      }
    });
  });

    // Blog Animation
    gsap.utils.toArray<HTMLElement>('.blog-card').forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // Carrusel automático de imágenes del Portfolio
    this.portfolioItems.forEach(item => {
      const id = setInterval(() => this.nextImage(item), 5000);
      this.intervals.push(id);
    });

   // Automatización Parallax (deshabilitado en pantallas pequeñas)
    if (this.parallaxBg && window.innerWidth > 768) {
      gsap.to(this.parallaxBg.nativeElement, {
        y: () => window.innerHeight * 0.3, // Ajusta el valor si lo quieres más/menos pronunciado
        ease: 'none',
        scrollTrigger: {
          trigger: '#automation',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6
        }
      });
    }

    // Contact Left Animation
    if (this.contactLeft) {
      gsap.from(this.contactLeft.nativeElement, {
        scrollTrigger: {
          trigger: this.contactLeft.nativeElement,
          start: 'top 90%',
          once: true,
        },
        x: -50,
        opacity: 0,
        duration: 1
      });
    }

    // Contact Right Animation
    if (this.contactRight) {
      gsap.from(this.contactRight.nativeElement, {
        scrollTrigger: {
          trigger: this.contactRight.nativeElement,
          start: 'top 90%',
          once: true,
        },
        x: 50,
        opacity: 0,
        duration: 1
      });
    }

    // Siempre refresca los triggers al final para asegurar
    ScrollTrigger.refresh();
}

  ngOnDestroy() {
  // Borra todos los timers al destruir el componente
  this.intervals.forEach(id => clearInterval(id));
  // ✔ NUEVO: limpiar animaciones GSAP/ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}
}
