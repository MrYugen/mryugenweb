import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { prefersReducedMotion } from '../utils/motion.utils';

// Registramos el plugin para asegurar el scroll suave de GSAP
gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-8 right-8 z-[90] flex flex-col items-center gap-2 transition-all duration-300"
        [ngClass]="{
          'opacity-100 translate-y-0 pointer-events-auto': visible,
          'opacity-0 translate-y-10 pointer-events-none': !visible
        }">
      
      <button 
        (click)="scrollToTop()"
        (mouseenter)="isHovered = true"
        (mouseleave)="isHovered = false"
        class="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10 transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Volver arriba">
        
        <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" 
                  class="stroke-gray-200 dark:stroke-white/10 fill-none" 
                  stroke-width="4"></circle>
          <circle cx="50" cy="50" r="46" 
                  class="stroke-cta fill-none transition-all duration-100 ease-out" 
                  stroke-width="4"
                  stroke-linecap="round"
                  [style.stroke-dasharray]="circumference"
                  [style.stroke-dashoffset]="dashOffset"></circle>
        </svg>

        <span class="relative z-10 text-xl md:text-2xl text-text dark:text-white transition-colors group-hover:text-cta pb-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </span>

      </button>

      <span class="absolute -top-8 px-2 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-wider rounded opacity-0 transition-opacity duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm"
            [class.opacity-100]="isHovered">
        Top
      </span>

    </div>
  `,
  styles: [`
    /* Estilos adicionales si fueran necesarios, pero Tailwind cubre casi todo */
    :host {
      display: block;
    }
  `]
})
export class ScrollToTopComponent implements OnInit {
  visible = false;
  isHovered = false;
  
  // Lógica del anillo de progreso
  readonly radius = 46; // Radio del círculo SVG (r="46")
  readonly circumference = 2 * Math.PI * this.radius;
  dashOffset = this.circumference; // Empieza vacío

  ngOnInit() {
    this.calcProgress(); // Calcular estado inicial
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // 1. Mostrar/Ocultar botón
    this.visible = window.scrollY > 300;
    
    // 2. Calcular progreso
    this.calcProgress();
  }

  calcProgress() {
    if (typeof window === 'undefined') return;
    
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = window.scrollY;
    
    // Evitar división por cero
    if (scrollHeight === 0) {
      this.dashOffset = this.circumference;
      return;
    }

    const percentage = scrollTop / scrollHeight;
    // Offset = Circunferencia - (Porcentaje * Circunferencia)
    this.dashOffset = this.circumference - (percentage * this.circumference);
  }

  scrollToTop() {
    const reduceMotion = prefersReducedMotion();

    if (!reduceMotion) {
      // Scroll suave con GSAP
      gsap.to(window, { 
        duration: 1, 
        scrollTo: { y: 0 }, 
        ease: 'power3.inOut' 
      });
    } else {
      // Fallback nativo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}