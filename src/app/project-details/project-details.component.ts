import { ThemeService } from '../services/theme.service';
import { Component, OnInit } from '@angular/core';
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

  currentSection: number = 0;

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

    // Indicador de progreso: actualizar currentSection al entrar en cada bloque
    gsap.utils.toArray<HTMLElement>('section[id]').forEach((sec, index) => {
      ScrollTrigger.create({
        trigger: sec,
        start: 'top center',
        onEnter: () => { this.currentSection = index + 1; },
        onEnterBack: () => { this.currentSection = index + 1; }
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
}
