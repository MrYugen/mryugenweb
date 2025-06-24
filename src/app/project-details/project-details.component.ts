import { ThemeService } from '../services/theme.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
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
  imports: [CommonModule, RouterModule, NavbarComponent, HeroComponent, FooterComponent, ScrollToTopComponent, BeforeAfterSliderComponent],
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

  PROJECTS_DATA: Project[] = PROJECTS_DATA_CONST;

  constructor(private route: ActivatedRoute, private theme: ThemeService) {}

  ngOnInit(): void {
    // 1. Recuperamos el slug de la URL. Ej: "selu-rizo-fotografia"
    this.slug = this.route.snapshot.paramMap.get('slug') || '';

    // 2. Buscamos en PROJECTS_DATA la entrada cuyo slug coincida
    this.project = this.PROJECTS_DATA.find(p => p.slug === this.slug);

    if (!this.project) {
      // Si no existe, podrías redirigir al 404, o volver al portfolio:
      // this.router.navigate(['/portfolio/branding']);
      console.warn(`No se encontró el proyecto con slug: ${this.slug}`);
    }
  }

  ngAfterViewInit(): void {
    // Animación de aparición para cada sección (fade + slide-up)
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',  // inicia cuando la sección entra en viewport
          toggleActions: 'play none none none',
          once: true
        }
      });
    });

    // Revelado tipo "mask" para imágenes clave
    gsap.utils.toArray<HTMLElement>('.reveal-img').forEach((img, i) => {
      gsap.from(img, {
        opacity: 0,
        scaleX: 0, transformOrigin: 'left center', // efecto barrido horizontal
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 80%', 
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

  openLightbox(url: string) {
    this.activeImage = url;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  @HostListener('window:keyup.escape')
  onEscape() {
    if (this.lightboxOpen) this.closeLightbox();
  }
}
