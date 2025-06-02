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

  PROJECTS_DATA = [
  {
    slug: 'selu-rizo-fotografia',
    title: 'Selu Rizo Fotografía',
    heroBgLight: '/assets/images/hero-selu-light.jpg',
    heroBgDark: '/assets/images/hero-selu-dark.jpg',
    logoLight: '/assets/images/logo-selu-white.png',
    logoDark: '/assets/images/logo-selu-white.png',
    ctaText: 'Captura la esencia de mi marca',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,            
    logoSize: 'w-[300px] max-w-full md:w-[450px]',            // Tamaño logo
  },
  {
    slug: 'coral-cakes',
    title: 'Coral Cakes',
    heroBgLight: '/assets/images/hero-coral-light.jpg',
    heroBgDark: '/assets/images/hero-coral-dark.jpg',
    logoLight: '/assets/images/logo-coral-cakes.png',
    logoDark: '/assets/images/logo-coral-cakes.png',
    ctaText: '¡Dale un sabor único a mi marca!',
    overlayOpacity: 0.15,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[300px] max-w-full md:w-[450px]',            // Tamaño logo
  },
  {
    slug: 'fc-beltatrez',
    title: 'F.C. Beltatrez',
    heroBgLight: '/assets/images/hero-beltatrez-light.jpg',
    heroBgDark: '/assets/images/hero-beltatrez-dark.jpg',
    logoLight: '/assets/images/logo-beltatrez.svg',
    logoDark: '/assets/images/logo-beltatrez.svg',
    ctaText: 'Haz de mi equipo una leyenda',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[200px] max-w-full md:w-[350px]',            // Tamaño logo
  },
  {
    slug: 'amor-y-arte',
    title: 'Amor y Arte',
    heroBgLight: '/assets/images/hero-amor-y-arte-light.jpg',
    heroBgDark: '/assets/images/hero-amor-y-arte-dark.jpg',
    logoLight: '/assets/images/logo-amor-y-arte.svg',
    logoDark: '/assets/images/logo-amor-y-arte.svg',
    ctaText: 'Dale alma a mi identidad',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[300px] max-w-full md:w-[450px]',            // Tamaño logo 
  },
  {
    slug: 'swamp-labs',
    title: 'Swamp Labs',
    heroBgLight: '/assets/images/hero-swamp-labs-light.jpg',
    heroBgDark: '/assets/images/hero-swamp-labs-dark.jpg',
    logoLight: '/assets/images/logo-swamp-labs.png',
    logoDark: '/assets/images/logo-swamp-labs.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[350px] max-w-full md:w-[500px]',            // Tamaño logo
  },
  {
    slug: 'ikigai-games',
    title: 'Ikigai Games',
    heroBgLight: '/assets/images/hero-ikigai-games-light.jpg',
    heroBgDark: '/assets/images/hero-ikigai-games-dark.jpg',
    logoLight: '/assets/images/logo-ikigai-games.png',
    logoDark: '/assets/images/logo-ikigai-games.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.05,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[500px] max-w-full md:w-[650px]',            // Tamaño logo
  },
  {
    slug: 'mr-yugen',
    title: 'Mr. Yugen',
    heroBgLight: '/assets/images/hero-mryugen-dark.jpg',
    heroBgDark: '/assets/images/hero-mryugen-dark.jpg',
    logoLight: '/assets/images/logo-hero-dark.svg',
    logoDark: '/assets/images/logo-hero-dark.svg',
    ctaText: '¿Quieres una marca personalizada?',
    overlayOpacity: 0.15,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[500px] max-w-full md:w-[650px]',            // Tamaño logo
  },
  {
    slug: 'royal-hounds',
    title: 'Royal Hounds',
    heroBgLight: '/assets/images/hero-royal-hounds-light.jpg',
    heroBgDark: '/assets/images/hero-royal-hounds-dark.jpg',
    logoLight: '/assets/images/logo-royal-hounds.png',
    logoDark: '/assets/images/logo-royal-hounds.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[350px] max-w-full md:w-[500px]',
  },
  {
    slug: 'estevez-asesores',
    title: 'Estévez Asesores',
    heroBgLight: '/assets/images/hero-estevez-asesores-light.jpg',
    heroBgDark: '/assets/images/hero-estevez-asesores-dark.jpg',
    logoLight: '/assets/images/logo-estevez-asesores-blanco.png',
    logoDark: '/assets/images/logo-estevez-asesores-blanco.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[450px] max-w-full md:w-[600px]',            // Tamaño logo
  },
  {
    slug: 'caffeine-studios',
    title: 'Caffeine Studios',
    heroBgLight: '/assets/images/hero-caffeine-studios-light.jpg',
    heroBgDark: '/assets/images/hero-caffeine-studios-dark.jpg',
    logoLight: '/assets/images/logo-caffeine-studios.png',
    logoDark: '/assets/images/logo-caffeine-studios.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[400px] max-w-full md:w-[550px]',            // Tamaño logo
  },
  {
    slug: 'couple-clash',
    title: 'Couple Clash',
    heroBgLight: '/assets/images/hero-couple-clash-light.jpg',
    heroBgDark: '/assets/images/hero-couple-clash-dark.jpg',
    logoLight: '/assets/images/logo-couple-clash.png',
    logoDark: '/assets/images/logo-couple-clash.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[200px] max-w-full md:w-[350px]',            // Tamaño logo
  },
  {
    slug: 'invitacion-boda',
    title: 'Invitación Boda Premium',
    heroBgLight: '/assets/images/hero-invitacion-boda-light.jpg',
    heroBgDark: '/assets/images/hero-invitacion-boda-dark.jpg',
    logoLight: '/assets/images/logo-hero-light.svg',
    logoDark: '/assets/images/logo-hero-dark.svg',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.15,
    showTitle: true,            
    showCTA: false,              
    logoSize: 'w-[300px] max-w-full md:w-[450px] mb-2',            // Tamaño logo
  },
  {
    slug: 'the-folly-inn-uk',
    title: 'The Folly Inn',
    heroBgLight: '/assets/images/hero-folly-inn-light.jpg',
    heroBgDark: '/assets/images/hero-folly-inn-dark.jpg',
    logoLight: '/assets/images/logo-folly-inn-white.png',
    logoDark: '/assets/images/logo-folly-inn-white.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.05,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[200px] max-w-full md:w-[350px]',            // Tamaño logo
  },
  // ... Añade mas proyectos
  ];

  constructor(private route: ActivatedRoute, private theme: ThemeService) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const slug = params.get('slug') || '';
    this.project = this.PROJECTS_DATA.find(p => p.slug === slug);
  });
  // Inicializa el estado del tema desde el ThemeService
  this.isDarkMode = this.theme.isDark();
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
