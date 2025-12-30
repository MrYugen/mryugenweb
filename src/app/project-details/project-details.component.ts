import { ThemeService } from '../services/theme.service';
import { Component, OnInit, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BeforeAfterSliderComponent } from '../before-after-slider/before-after-slider.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA as PROJECTS_DATA_CONST, Project } from './projects.data';
import { prefersReducedMotion } from '../utils/motion.utils';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MobileNavbarComponent, HeroComponent, FooterComponent, ScrollToTopComponent, BeforeAfterSliderComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'] // Asegúrate de que este archivo existe, aunque esté vacío si usas Tailwind
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  slug: string = '';
  isDarkMode: boolean = false;
  project: any = null;

  // Lightbox
  lightboxOpen = false;
  activeImage = '';
  activeIndex = 0;
  activeList: string[] = [];

  prevProject: Project | null = null;
  nextProject: Project | null = null;

  PROJECTS_DATA: Project[] = PROJECTS_DATA_CONST;

  private scrollPosition = 0;
  private bodyScrollLocked = false;

  constructor(private route: ActivatedRoute, private theme: ThemeService) {}

  ngOnInit(): void {
    // Detectar modo oscuro inicial si tienes un servicio para ello
    // this.isDarkMode = this.theme.currentTheme === 'dark'; // Ejemplo

    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      const index = this.PROJECTS_DATA.findIndex(p => p.slug === this.slug);
      
      if (index === -1) {
        // Redirigir a 404 o home si prefieres
        return;
      }

      this.project = this.PROJECTS_DATA[index];
      this.prevProject = this.PROJECTS_DATA[index - 1] || null;
      this.nextProject = this.PROJECTS_DATA[index + 1] || null;

      // Importante: Reiniciar scroll y refrescar ScrollTrigger al cambiar de ruta
      setTimeout(() => {
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
      }, 10);
    });
  }

  ngAfterViewInit(): void {
    if (prefersReducedMotion()) return;
    
    this.initAnimations();
  }

  // Separamos las animaciones para poder rellamarlas si fuera necesario
  initAnimations() {
    // Limpiar triggers previos para evitar duplicados al navegar
    ScrollTrigger.getAll().forEach(t => t.kill());

    // 1. Animación suave de secciones de texto
    const sections = gsap.utils.toArray<HTMLElement>('.reveal-section');
    sections.forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%', // Se activa un poco antes
            toggleActions: 'play none none reverse' // Reverse hace que se desvanezca si subes (opcional)
          }
        }
      );
    });

    // 2. Imágenes con efecto "pop" y escalado
    const images = gsap.utils.toArray<HTMLElement>('.reveal-img');
    images.forEach((img, i) => {
      gsap.fromTo(img,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: i % 2 * 0.1, // Pequeño stagger si hay varias juntas
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            once: true // Solo una vez para imágenes, queda más elegante
          }
        }
      );
    });
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(t => t.kill());
    if (this.bodyScrollLocked) this.toggleBodyScroll(false);
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  // --- Lógica Lightbox (Misma que tenías, funciona bien) ---
  openLightbox(url: string, list: string[], index: number) {
    this.activeImage = url;
    this.activeList = list;
    this.activeIndex = index;
    this.lightboxOpen = true;
    this.toggleBodyScroll(true);
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.toggleBodyScroll(false);
  }

  prevImage() {
    if (!this.activeList.length) return;
    this.activeIndex = (this.activeIndex - 1 + this.activeList.length) % this.activeList.length;
    this.activeImage = this.activeList[this.activeIndex];
  }

  nextImage() {
    if (!this.activeList.length) return;
    this.activeIndex = (this.activeIndex + 1) % this.activeList.length;
    this.activeImage = this.activeList[this.activeIndex];
  }

  @HostListener('window:keyup.escape')
  onEscape() {
    if (this.lightboxOpen) this.closeLightbox();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }

  private toggleBodyScroll(disable: boolean) {
    if (typeof document === 'undefined') return;
    const body = document.body;
    if (disable) {
      this.scrollPosition = window.scrollY;
      body.style.overflow = 'hidden';
      // Nota: Evitamos fixed position a veces causa saltos en móviles, 
      // overflow: hidden suele bastar si el html también lo tiene.
    } else {
      body.style.overflow = '';
    }
  }
}