import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';
import { prefersReducedMotion } from '../utils/motion.utils';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-branding',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    MobileNavbarComponent,
    HeroComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './portfolio-branding.component.html',
  styleUrls: ['./portfolio-branding.component.css']
})

export class PortfolioBrandingComponent implements OnInit, OnDestroy, AfterViewInit {
  isDarkMode = false;

  // Estado de la sección "Proceso"
  activeStep = 0;

  brandingSteps = [
    {
      title: '1. Investigación',
      text: 'Analizo tu sector, tus competidores y tu público objetivo para entender el contexto de tu marca y encontrar oportunidades únicas.',
      image: 'assets/images/branding_investiga.jpg'
    },
    {
      title: '2. Moodboard',
      text: 'Recojo referencias visuales, paletas de color y estilos que inspiran y definen la atmósfera que tendrá tu identidad visual.',
      image: 'assets/images/branding_moodboard.jpg'
    },
    {
      title: '3. Boceto',
      text: 'A lápiz y papel, empiezo a plasmar ideas, logotipos y conceptos iniciales, dando forma a las primeras propuestas gráficas.',
      image: 'assets/images/branding_bocetos.jpg'
    },
    {
      title: '4. Revisión y diseño final',
      text: 'Juntos analizamos y pulimos las propuestas. Ajusto detalles, colores y tipografía hasta que tu marca te represente al 100%.',
      image: 'assets/images/branding_revision.jpg'
    },
    {
      title: '5. Entrega',
      text: 'Te entrego todos los archivos y aplicaciones de tu nueva identidad: logotipo, manual, mockups y consejos para empezar a usarla.',
      image: 'assets/images/branding_entrega.jpg'
    }
  ];

  // Datos de los proyectos y carousel interno
  brandingProjects = [
  {
    title: 'Selu Rizo Fotografía',
    summary: 'Diseño de identidad visual, logotipo y tarjeta de visita para un fotógrafo profesional',
    slug: 'selu-rizo-fotografia',
    images: [
      'assets/images/proyecto1_img1.jpg',
      'assets/images/proyecto1_img2.jpg',
      'assets/images/proyecto1_img3.jpg'
    ],
  },
  {
    title: 'Coral Cakes',
    summary: 'Creación de logotipo para una pastelería británica con un estilo elegante y apetitoso',
    slug: 'coral-cakes',
    images: [
      'assets/images/proyecto2_img1.jpg',
      'assets/images/proyecto2_img2.jpg',
      'assets/images/proyecto2_img3.jpg'
    ],
  },
  {
    title: 'F.C. Beltatrez',
    summary: 'Rediseño de identidad deportiva: logo, bandera y equipación para un club de fútbol',
    slug: 'fc-beltatrez',
    images: [
      'assets/images/proyecto3_img1.jpg',
      'assets/images/proyecto3_img2.jpg',
      'assets/images/proyecto3_img3.jpg'
    ],
  },
    {
    title: 'Swamp Labs',
    summary: 'Diseño de Concept Art, logotipo y recursos gráficos para una colección NFT británica',
    slug: 'swamp-labs',
    images: [
      'assets/images/proyecto5_img1.jpg',
      'assets/images/proyecto5_img2.jpg',
      'assets/images/proyecto5_img3.jpg'
    ],
  },
  {
    title: 'Amor y Arte',
    summary: 'Branding y packaging para una artista especializada en muñecos reborn',
    slug: 'amor-y-arte',
    images: [
      'assets/images/proyecto4_img1.jpg',
      'assets/images/proyecto4_img2.jpg',
      'assets/images/proyecto4_img3.jpg'
    ],
  },

  {
    title: 'Ikigai Games',
    summary: 'Diseño de identidad visual para un sello editorial de juegos de mesa',
    slug: 'ikigai-games',
    images: [
      'assets/images/proyecto6_img1.jpg',
      'assets/images/proyecto6_img2.jpg',
      'assets/images/proyecto6_img3.jpg'
    ],
  },
  {
    title: 'Mr. Yugen',
    summary: 'Branding de mi marca personal, reflejando creatividad artística y estilo único',
    slug: 'mr-yugen',
    images: [
      'assets/images/proyecto7_img1.jpg',
      'assets/images/proyecto7_img2.jpg',
      'assets/images/proyecto7_img3.jpg'
    ],
  },
  {
    title: 'Royal Hounds',
    summary: 'Creación de logo, mock-ups, merchandising y diseño de campaña de crowdfunding',
    slug: 'royal-hounds',
    images: [
      'assets/images/proyecto8_img1.jpg',
      'assets/images/proyecto8_img2.jpg',
      'assets/images/proyecto8_img3.jpg'
    ],
  },
  {
    title: 'Estévez Asesores',
    summary: 'Modernización de identidad visual y desarrollo web para una Asesoría',
    slug: 'estevez-asesores',
    images: [
      'assets/images/proyecto9_img1.jpg',
      'assets/images/proyecto9_img2.jpg',
      'assets/images/proyecto9_img3.jpg'
    ],
  },
  {
    title: 'Caffeine Studios',
    summary: 'Rediseño de identidad visual, ilustraciones y tarjeta de visita para una empresa creativa',
    slug: 'caffeine-studios',
    images: [
      'assets/images/proyecto10_img1.jpg',
      'assets/images/proyecto10_img2.jpg',
      'assets/images/proyecto10_img3.jpg'
    ],
  },
  {
    title: 'The Folly Inn UK',
    summary: 'Diseño de identidad visual y cartel para una taberna típica inglesa con esencia tradicional',
    slug: 'the-folly-inn-uk',
    images: [
      'assets/images/proyecto13_img1.jpg',
      'assets/images/proyecto13_img2.jpg',
      'assets/images/proyecto13_img3.jpg'
    ],
  },
  {
    title: 'Invitación de Boda Premium',
    summary: 'Diseño de una invitación de boda premium personalizada, elegante y exclusiva',
    slug: 'invitacion-boda',
    images: [
      'assets/images/proyecto12_img1.jpg',
      'assets/images/proyecto12_img2.jpg',
      'assets/images/proyecto12_img3.jpg'
    ],
  },
    {
    title: 'Couple Clash',
    summary: 'Todo el proceso creativo de mi proyecto más ambicioso: diseño, branding y estrategia',
    slug: 'couple-clash',
    images: [
      'assets/images/proyecto11_img1.jpg',
      'assets/images/proyecto11_img2.jpg',
      'assets/images/proyecto11_img3.jpg'
    ],
  },
];
  
  // Control de Hover en Proyectos
  currentImageIndexes: number[] = [];
  private hoverIntervals: any[] = []; // Guardamos los intervals individuales

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  ngOnInit() {
    // Inicializamos índices en 0
    this.currentImageIndexes = this.brandingProjects.map(() => 0);
  }

  ngAfterViewInit() {
    if (prefersReducedMotion()) return;

    // Animaciones de entrada simples y elegantes
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%'
        }
      });
    });

    // Stagger para las tarjetas
    ScrollTrigger.batch('.reveal-card', {
      onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      }),
      start: 'top 90%'
    });
  }

  ngOnDestroy() {
    this.stopAllHovers();
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }

  // --- LOGICA GRID ASIMÉTRICO ---
  // Define patrón: Cada 3 items, el primero es grande (ej: 0, 3, 6...)
  // O haz un patrón 2-1, 1-2. Aquí usamos un patrón simple:
  isFeatured(index: number): boolean {
    // Ejemplo: El primero (0) y el cuarto (3) son grandes.
    // Patrón: Grande, Pequeño, Pequeño -> Grande, Pequeño, Pequeño
    return index % 3 === 0;
  }

  // --- LOGICA HOVER ---
  startProjectHover(index: number) {
    // Si ya hay un intervalo (usuario entra y sale rápido)
    this.stopProjectHover(index);

    // Cambiar imagen cada 800ms mientras esté el mouse encima
    this.hoverIntervals[index] = setInterval(() => {
      this.currentImageIndexes[index] = 
        (this.currentImageIndexes[index] + 1) % this.brandingProjects[index].images.length;
    }, 900); 
  }

  stopProjectHover(index: number) {
    if (this.hoverIntervals[index]) {
      clearInterval(this.hoverIntervals[index]);
      this.hoverIntervals[index] = null;
    }
    this.currentImageIndexes[index] = 0;
  }

  private stopAllHovers() {
    this.hoverIntervals.forEach(interval => {
      if (interval) clearInterval(interval);
    });
  }
}

