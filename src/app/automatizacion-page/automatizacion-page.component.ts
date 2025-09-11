import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { HeroComponent } from '../hero/hero.component';
import { ThemeService } from '../services/theme.service';
// Importar GSAP y plugin ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-automatizacion-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent, ScrollToTopComponent, HeroComponent],
  templateUrl: './automatizacion-page.component.html',
  styleUrls: ['./automatizacion-page.component.css']
})
export class AutomatizacionPageComponent implements OnInit, AfterViewInit, OnDestroy {
  isDarkMode = false;
  carouselImages: string[] = [
    'assets/images/automatizacion/carousel_portada.jpg',
    'assets/images/automatizacion/carousel1.jpg',
    'assets/images/automatizacion/carousel2.jpg',
    'assets/images/automatizacion/carousel3.jpg',
    'assets/images/automatizacion/carousel4.jpg',
    'assets/images/automatizacion/carousel5.jpg',
    'assets/images/automatizacion/carousel6.jpg',
    'assets/images/automatizacion/carousel7.jpg'
  ];
  currentIndex = 0;

  // Estado para flip cards (bool por tarjeta)
  flipped: boolean[] = [false, false, false, false, false, false];

  logos = [
    { src: 'assets/images/logos/zapier.png', alt: 'Zapier logo' },
    { src: 'assets/images/logos/make.png', alt: 'Make logo' },
    { src: 'assets/images/logos/n8n.png', alt: 'n8n logo' },
    { src: 'assets/images/logos/google_workspace.png', alt: 'Google Workspace logo' },
    { src: 'assets/images/logos/airtable.png', alt: 'Airtable logo' },
    { src: 'assets/images/logos/sql.png', alt: 'SQL logo' },
    { src: 'assets/images/logos/sheets.png', alt: 'Google Sheets logo' },
    { src: 'assets/images/logos/chatgpt.svg', alt: 'ChatGPT logo' },
    { src: 'assets/images/logos/gemini.png', alt: 'Gemini logo' },
    { src: 'assets/images/logos/copilot.webp', alt: 'GitHub Copilot logo' },
    { src: 'assets/images/logos/meta.svg', alt: 'Meta logo' },
    { src: 'assets/images/logos/claude.png', alt: 'Claude logo' },
    { src: 'assets/images/logos/grok.png', alt: 'Grok logo' },
    { src: 'assets/images/logos/notion.png', alt: 'Notion logo' },
    { src: 'assets/images/logos/trello.png', alt: 'Trello logo' },
    { src: 'assets/images/logos/slack.png', alt: 'Slack logo' },
    { src: 'assets/images/logos/whatsapp.png', alt: 'WhatsApp logo' },
    { src: 'assets/images/logos/telegram.png', alt: 'Telegram logo' },
    { src: 'assets/images/logos/stripe.png', alt: 'Stripe logo' },
    { src: 'assets/images/logos/woocommerce.png', alt: 'WooCommerce logo' },
    { src: 'assets/images/logos/shopify.png', alt: 'Shopify logo' },
  ];

  // Preguntas frecuentes (FAQ)
  faqs = [
    { pregunta: '¿Qué tipo de procesos se pueden automatizar?', respuesta: `Prácticamente cualquier proceso que sea repetitivo y basado en reglas. Esto incluye tareas administrativas, gestión de datos, atención al cliente, marketing, ventas, y mucho más.` },
    { pregunta: '¿Necesito saber programar?', respuesta: `No. Tú nos cuentas qué te quita tiempo y nosotros lo montamos. Te dejamos todo documentado, con tutorial en pdf, vídeo y una sesión breve para que lo uses con soltura.` },
    { pregunta: '¿Cuánto tiempo lleva?', respuesta: `Depende del alcance, pero trabajamos así:\n1) Diagnóstico (48–72 h) · 2) Prototipo (1–2 semanas) · 3) Implementación (1–3 semanas).\nPara flujos sencillos, puedes tener un piloto funcionando en días. Incluimos soporte de arranque.` },
    { pregunta: '¿Qué herramientas usáis?', respuesta: `Elegimos la mejor opción según coste, robustez y privacidad: Zapier, Make, n8n (on-prem si lo necesitas), Google Workspace (Apps Script), APIs/webhooks, bases de datos (Airtable/Sheets/SQL) e IA para clasificar, resumir o redactar. También integramos lo que ya usas (Notion, Trello, Slack, WhatsApp Business, Stripe, WooCommerce/Shopify…).` },
    { pregunta: '¿Cuánto cuesta y qué ROI esperar?', respuesta: `El precio se ajusta al tamaño del encargo. Como referencia, la inversión suele recuperarse en 1–3 meses cuando hay tareas repetitivas (≥5 h/semana).\nEjemplo rápido: si inviertes 20 h/mes a 25 €/h = 500 €. Automatizando un 70% → ahorro ~350 €/mes. En la consultoría te damos un cálculo realista para tu caso.` },
    { pregunta: '¿Qué pasa con mis datos?', respuesta: `Cumplimos RGPD y aplicamos mínima exposición de datos. Accesos solo a lo imprescindible, cifrado en tránsito, registro de actividades y posibilidad de revocar permisos en cualquier momento. Para datos sensibles, opción n8n self-hosted o cuentas segregadas. Firmamos NDA si lo necesitas.` },
    { pregunta: '¿Cuál es el proceso de trabajo?', respuesta: `Reunión de descubrimiento → mapa de procesos → propuesta con flujos y métricas → prototipo → pruebas con tu equipo → puesta en producción → monitorización y mejoras. Tú ves resultados paso a paso y decides cada hito.` },
    { pregunta: 'Si soy un particular, ¿automatizáis procesos por encargo?', respuesta: `Sí, ofrecemos servicios de automatización a particulares. Puedes contarnos qué procesos te gustaría automatizar y trabajaremos contigo para implementarlo. Aparte, te enseñaré a utilizar las herramientas para que puedas gestionar tus automatizaciones de forma independiente en el futuro.` },
    { pregunta: '¿Realizáis formaciones para aprender sobre Inteligencia Artificial?', respuesta: `Sí, ofrecemos formaciones personalizadas 1 a 1 con Mr. Yugen (o en grupo para empresas) para aprender sobre Inteligencia Artificial aunque no necesites automatizar ningún proceso. Estas formaciones están diseñadas para que puedas adquirir los conocimientos necesarios y aplicar la IA en tu día a día. Todo apoyado con material didáctico y ejemplos prácticos.` }
  ];

  scrollToSection(id: string, event: Event): void {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDark();
  }

  // Toggle del tema claro/oscuro
  toggleTheme() {
    this.isDarkMode = this.themeService.toggle();
  }

  // Alternar estado de una tarjeta (flip card) al hacer clic
  toggleCard(index: number) {
    this.flipped[index] = !this.flipped[index];
  }

  // Para FAQ: determinar si una pregunta está abierta
  openFaqIndex: number | null = null;
  toggleFAQ(index: number) {
    this.openFaqIndex = (this.openFaqIndex === index ? null : index);
  }
  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  ngAfterViewInit(): void {
    // Animaciones de aparición con GSAP al hacer scroll
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100px',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });
    gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100px',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });
    // Refrescar ScrollTrigger tras definir animaciones
    ScrollTrigger.refresh();
  }

  ngOnDestroy(): void {
    // Matar todos los triggers de scroll para evitar fugas de memoria
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
