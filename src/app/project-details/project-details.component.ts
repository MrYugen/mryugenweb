import { ThemeService } from '../services/theme.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BeforeAfterSliderComponent } from '../before-after-slider/before-after-slider.component';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA as PROJECTS_DATA_CONST, Project } from './projects.data';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MobileNavbarComponent, HeroComponent, FooterComponent, ScrollToTopComponent, BeforeAfterSliderComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  slug: string = '';
  // Aquí declararemos el modo oscuro
  isDarkMode: boolean = false;
  project: any = null;

  lightboxOpen = false;
  activeImage = '';
  activeIndex = 0;
  activeList: string[] = [];

  prevProject: Project | null = null;
  nextProject: Project | null = null;

  PROJECTS_DATA: Project[] = PROJECTS_DATA_CONST;

  constructor(private route: ActivatedRoute, private theme: ThemeService) {}

  ngOnInit(): void {
    // Nos suscribimos a los cambios de slug en la URL para
    // actualizar el proyecto sin recargar la página
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';

      const index = this.PROJECTS_DATA.findIndex(p => p.slug === this.slug);
      this.project = this.PROJECTS_DATA[index];

      if (index === -1) {
        console.warn(`No se encontró el proyecto con slug: ${this.slug}`);
        return;
      }

      this.prevProject = this.PROJECTS_DATA[index - 1] || null;
      this.nextProject = this.PROJECTS_DATA[index + 1] || null;

      // Al navegar, situamos la vista arriba para empezar desde el inicio
      window.scrollTo({ top: 0 });
    });
  }

  ngAfterViewInit(): void {
    // Animación de aparición para cada sección (fade + slide-up)
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });

    // Revelado tipo "mask" para imágenes clave
    gsap.utils.toArray<HTMLElement>('.reveal-img').forEach((img) => {
      gsap.from(img, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 90%', 
          toggleActions: 'play none none none',
          once: true
        }
      });
    });
  }

  ngOnDestroy(): void {
    // Limpiar triggers de ScrollTrigger al salir de la página
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  // Método para el toggle desde el Navbar
  toggleTheme() {
  this.isDarkMode = this.theme.toggle();
  }

  openLightbox(url: string, list: string[], index: number) {
    this.activeImage = url;
    this.activeList = list;
    this.activeIndex = index;
    this.lightboxOpen = true;
    setTimeout(() => {
      const closeBtn = document.getElementById('lightbox-close');
      closeBtn?.focus();
    });
  }

  closeLightbox() {
    this.lightboxOpen = false;
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

  @HostListener('window:keydown')
  onKeyDown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'ArrowLeft') { this.prevImage(); event.preventDefault(); }
    if (event.key === 'ArrowRight') { this.nextImage(); event.preventDefault(); }
    if (event.key === 'Tab') {
      const closeBtn = document.getElementById('lightbox-close');
      event.preventDefault();
      closeBtn?.focus();
    }
  }
}
