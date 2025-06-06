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
    logoSize: 'w-[300px] max-w-full md:w-[450px]',

    clientName: 'Selu Rizo Fotografía - Fotógrafo profesional',
    date: 'Mayo 2020',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' }, ],
    duration: '2 semanas',
    briefDescription: 'En mayo de 2020, Selu Rizo, fotógrafo profesional freelance, confió en mi estudio para dar forma a su nueva imagen de marca. El reto: crear desde cero un logotipo y unas tarjetas de visita que no solo transmitieran profesionalidad, sino que reflejaran su estilo visual único y la pasión que imprime en cada trabajo.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/selu_mood1.jpg',
      '/assets/images/selu_mood2.jpg'
    ],
    moodboardText: 'Todo gran proyecto comienza con una profunda comprensión de la marca. Analicé las tendencias actuales en fotografía profesional, estudiando paletas cromáticas, estilos tipográficos y el universo visual de la competencia. El objetivo: descubrir aquello que hace a Selu Rizo diferente, y transformarlo en un lenguaje visual auténtico. La creatividad se plasmó en papel y pantalla: generé diversas propuestas, buscando un equilibrio entre elegancia y personalidad.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'La clave diferencial llegó al decidir sustituir la letra “e” de “Selu” por una espiral de Fibonacci, símbolo universal de perfección y belleza natural, ejecutada con un trazo pictórico rojo que añade energía y fuerza visual a la marca. Esta espiral no solo representa la mirada creativa de Selu, sino que evoca la composición armónica presente en sus fotografías, transmitiendo profesionalidad y arte a partes iguales. El logotipo evolucionó en un formato 100% vectorial, listo para adaptarse a cualquier soporte y necesidad del cliente.',
    bocetoImg: '/assets/images/selu_boceto.jpg',
    finalImg: '/assets/images/selu_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Desarrollé dos versiones cromáticas —para fondo claro y oscuro— garantizando máxima legibilidad y coherencia en cualquier contexto. Las tarjetas de visita, diseñadas para impactar a primera vista, se aprobaron en la primera propuesta: un diseño limpio, potente y alineado con la identidad recién creada. Entregué todos los archivos finales del logotipo y sus variantes, preparados para impresión profesional y uso digital inmediato. Coordiné la producción de las tarjetas de visita para su primera tirada, asegurando una presentación impecable. ¿Buscas una identidad visual que eleve tu marca y transmita lo mejor de ti? Hablemos y convierte tu proyecto en un referente.',
    mockups: [
      '/assets/images/selu_mockup1.jpg',
      '/assets/images/selu_mockup2.jpg'
    ]
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
    logoSize: 'w-[300px] max-w-full md:w-[450px]',

    clientName: 'Coral Cakes - Repostería creativa británica',
    date: 'Junio 2021',
    tools: [ { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' } ],
    duration: '1 semana',
    briefDescription: 'En junio de 2021, Coral Cakes, una encantadora empresa británica especializada en cupcakes artesanales, me encargó el diseño de un logotipo que expresara su identidad creativa, alegre y memorable. El reto era sencillo en apariencia, pero profundo en su ejecución: capturar en una sola imagen la dulzura, elegancia y originalidad que la marca ofrece.',

    moodboardImgs: [
      '/assets/images/coral_mood1.png',
      '/assets/images/coral_mood2.png'
    ],
    moodboardText: 'La fase inicial fue una exploración intensa y divertida: me sumergí en diversas paletas cromáticas cosy, tipografías amigables y modernas, y en tendencias de diseño actuales en el sector de la repostería creativa. El objetivo claro: encontrar la esencia visual que diferenciara a Coral Cakes, realzando su identidad creativa en un mercado saturado.',

    bocetoDescription: 'Con una paleta cromática cálida, dulce y atractiva definida, realicé múltiples bocetos y conceptos visuales. Cada propuesta buscaba transmitir alegría, cercanía y creatividad. Junto a la clienta, evaluamos cada opción cuidadosamente, seleccionando finalmente un diseño que reflejaba plenamente su visión.',
    bocetoImg: '/assets/images/coral_boceto.jpg',
    finalImg: '/assets/images/coral_final.jpg',

    conclusionText: 'Una vez elegida la propuesta definitiva, desarrollé el logotipo final en Adobe Illustrator, asegurando un formato vectorial escalable y de calidad premium. El resultado fue un logotipo versátil, eficaz en cualquier contexto y en cualquier color de fondo, garantizando así una imagen consistente y profesional en todas las aplicaciones digitales e impresas. Entregué todos los archivos finales junto a varios diseños de packaging para los productos, todos en formatos vectoriales de alta resolución, preparados para impresión profesional y uso digital inmediato. ¿Quieres darle a tu marca una imagen memorable y deliciosa? Contáctame y juntos haremos realidad tu visión creativa.',
    mockups: [
      '/assets/images/coral_mockup1.jpg',
      '/assets/images/coral_mockup2.jpg',
    ]
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
    logoSize: 'w-[200px] max-w-full md:w-[350px]',

    clientName: 'F.C. Beltatrez - Equipo de futbol de Timor Oriental, ubicado en Oxford (UK)',
    date: 'Agosto 2023',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' },
      { name: 'Procreate', icon: 'assets/images/icons/Procreate_icon.jpeg' } ],
    duration: '1 mes',
    briefDescription: 'En agosto de 2023, F.C. Beltatrez, un equipo de fútbol con raíces en Timor Oriental y sede en Oxford (Reino Unido), confió en mí para llevar a cabo un rebranding integral. El desafío era renovar la imagen del escudo oficial, diseñar una nueva equipación deportiva principal y rediseñar una bandera representativa, fusionando la cultura de Timor Oriental con una estética moderna y llamativa que potenciara la identidad única del club.',

    moodboardImgs: [
      '/assets/images/belta_mood1.jpg',
      '/assets/images/belta_mood2.jpg'
    ],
    moodboardText: 'Comencé profundizando en la historia visual del equipo, recopilando fotografías y gráficos previos, al mismo tiempo que obtenía información y feedback directamente del entrenador y el cuerpo técnico. Esto permitió definir claramente la dirección visual de la nueva equipación. Teniendo en cuenta la identidad cultural de Timor Oriental, elaboré diversos bocetos y exploré múltiples conceptos visuales, probando elementos gráficos, colores vibrantes y tipografías modernas.',

    bocetoDescription: 'Después de varias revisiones junto al equipo, se seleccionó un diseño definitivo que reflejara perfectamente la esencia del club. La fase digital implicó transformar el diseño antiguo del logo en un escudo vectorial escalable, garantizando su adaptabilidad a diferentes formatos y usos y manteniendo la estética y elementos gráficos del anterior. Con Procreate, realicé mockups detallados de la equipación, asegurando una visualización precisa y realista de los colores y patrones seleccionados. La bandera fue rediseñada con el nuevo logotipo, usando principalmente los colores rojo y negro emblemáticos de Timor Oriental.',
    bocetoImg: '/assets/images/belta_boceto.jpg',
    finalImg: '/assets/images/belta_final.jpg',

    conclusionText: 'Entregué al club todos los archivos finales, listos para aplicaciones físicas y digitales. Además, proporcioné asesoramiento especializado sobre materiales, medidas, proveedores y tiempos de producción, facilitando así la adquisición eficiente de equipaciones y merchandising oficial de alta calidad. ¿Quieres modernizar la imagen de tu equipo y destacar sobre el terreno de juego? Contáctame y hagamos realidad la visión deportiva de tu club.',
    mockups: [
      '/assets/images/belta_mockup1.jpg',
      '/assets/images/belta_mockup2.jpg'
    ]
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
    logoSize: 'w-[300px] max-w-full md:w-[450px]',

    clientName: 'Amor y Arte – Empresa artesanal de muñecos reborn personalizados',
    date: 'Julio 2018',
    tools: [ { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' } ],
    duration: '4 días',
    briefDescription: 'En julio de 2018, Amor y Arte, una empresa dedicada a la fabricación artesanal de muñecos reborn personalizados, acudió a mí para crear desde cero su logotipo principal. El desafío consistía en reflejar con delicadeza y precisión la belleza, ternura y exquisitez que caracterizan sus productos artesanales, capturando el cuidado y amor que ponen en cada creación.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/amor_mood1.jpg',
      '/assets/images/amor_mood2.jpg'
    ],
    moodboardText: 'Inicié el proyecto sumergiéndome en el universo emocional y delicado de los muñecos reborn. Realicé un análisis detallado de los productos, exploré valores clave que la empresa quería proyectar y estudié la competencia para asegurar que el diseño final destacara claramente la identidad única y personal de Amor y Arte. Tras una conversación profunda con el cliente, definí una paleta cromática suave y elegante, alineada con la esencia del proyecto. Planteé varias propuestas iniciales, utilizando trazos cálidos y tipografías cercanas que reflejaran la emotividad y delicadeza que caracteriza a los muñecos reborn.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'El cliente seleccionó rápidamente la propuesta que mejor conectaba con su visión. Una vez elegidos los elementos visuales y tipográficos, desarrollé la versión final del logotipo en formato vectorial. Ajusté cuidadosamente medidas, colores y distribución tipográfica para asegurar que el resultado transmitiera equilibrio visual y reflejara la esencia cálida y tierna de Amor y Arte.',
    bocetoImg: '/assets/images/amor_boceto.jpg',
    finalImg: '/assets/images/amor_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Proporcioné los archivos digitales finales en alta resolución, preparados para ser usados inmediatamente en diversos soportes digitales e impresos. Además, creé mockups realistas del logotipo aplicado a packaging existente, mostrando cómo la nueva identidad visual mejoraría la experiencia del cliente. ¿Quieres una identidad visual que refleje con elegancia y autenticidad la esencia de tu negocio artesanal? Contáctame y llevemos tu marca al siguiente nivel.',
    mockups: [
      '/assets/images/amor_mockup1.jpg',
      '/assets/images/amor_mockup2.jpg'
    ]
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
