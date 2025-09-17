import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../utils/motion.utils';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements AfterViewInit, OnDestroy {
  @Input() isDarkMode: boolean = false;
  @Input() title: string = 'Creatividad. Diseño. Código';
  @Input() showTitle: boolean = true;    // Mostrar/ocultar título
  @Input() subtitle?: string; // Nuevo input opcional para el subtitulo
  @Input() subtitleClass = '';
  @Input() logoSize: string = 'w-96'; // Tailwind class por defecto
  @Input() overlayOpacity: number = 0.15; // Por defecto 15%
  @Input() logoEffect: string = ''; // Efecto del logo, por defecto vacío
  @Input() showCTA: boolean = true; // Por defecto muestra el botón
  @Input() ctaText: string = 'Descubre Couple Clash'; // Texto del botón
  @Input() bgImageLight: string = '/assets/images/hero-bg-light.jpg';
  @Input() bgImageDark: string = '/assets/images/hero-bg-dark.jpg';
  @Input() logoLight: string = 'assets/images/logo-hero-light.svg';
  @Input() logoDark: string = 'assets/images/logo-hero-dark.svg';
  @Input() ctaTextColor?: string;
  @Input() ctaLink: string = '';
  @Input() logoAlt: string = '';


  @ViewChild('heroHeading') heroHeading!: ElementRef<HTMLHeadingElement>;
  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef<HTMLElement>;

constructor(private router: Router) { /* ... */ }

goToCTA() {
    const reduceMotion = prefersReducedMotion();
    if (this.ctaLink.startsWith('/#')) {
      // Navegar al home y hacer scroll al fragmento cuando se cargue
      const fragmentId = this.ctaLink.replace('/#', '');
      this.router.navigate(['/'], { fragment: fragmentId }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(fragmentId);
          if (el) {
            el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
          }
        }, 200);
      });
    } else {
      // Para enlaces a otras rutas/secciones
      this.router.navigateByUrl(this.ctaLink);
    }
  }


  ngAfterViewInit() {
  const reduceMotion = prefersReducedMotion()

  // Animación de aparición del título
    if (!reduceMotion && this.heroHeading) {
      gsap.from(this.heroHeading.nativeElement, {
        opacity: 0,
        y: -40,
        duration: 2.5,
        ease: 'power3.out'
      });
    }

    // Parallax del fondo del hero
    if (!reduceMotion && this.heroSection) {
      gsap.to(this.heroSection.nativeElement, {
        backgroundPosition: '50% 80%',
        ease: 'none',
        scrollTrigger: {
          trigger: this.heroSection.nativeElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}