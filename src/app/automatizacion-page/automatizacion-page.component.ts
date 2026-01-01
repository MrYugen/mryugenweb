import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { HeroComponent } from '../hero/hero.component';
import { ThemeService } from '../services/theme.service';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/motion.utils';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-automatizacion-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent, ScrollToTopComponent, HeroComponent, MobileNavbarComponent, HttpClientModule],
  templateUrl: './automatizacion-page.component.html',
  styleUrls: ['./automatizacion-page.component.css']
})
export class AutomatizacionPageComponent implements OnInit, AfterViewInit, OnDestroy {
  isDarkMode = false;
  
  // Formulario
  name: string = "";
  email: string = "";
  message: string = "";
  newsletter: boolean = false;
  submitting: boolean = false;
  submitSuccess: boolean = false;
  submitSuccessMessage: string = "";

  // FAQ State
  openFaqIndex: number | null = null;

  // DATA: Metodología Interactiva
  activeStep = 0;
  methodologySteps = [
    {
      title: 'Descubrimiento',
      text: 'Reunión inicial para entender tus objetivos, detectar los cuellos de botella y definir prioridades. No automatizamos por automatizar, buscamos impacto.',
      image: 'assets/images/automatizacion/carousel_portada.jpg' // Usa tu path real
    },
    {
      title: 'Mapeo de Procesos',
      text: 'Estudiamos cómo trabajas actualmente y lo traducimos en un mapa visual de sistemas conectados. Detectamos redundancias y oportunidades.',
      image: 'assets/images/automatizacion/carousel1.jpg'
    },
    {
      title: 'Propuesta & KPIs',
      text: 'Te presento la solución: arquitectura de flujos, herramientas a usar y, lo más importante, cómo mediremos el éxito (tiempo ahorrado, errores reducidos).',
      image: 'assets/images/automatizacion/carousel2.jpg'
    },
    {
      title: 'Prototipado',
      text: 'Creamos un prototipo funcional (MVP). Lo construimos en nuestro entorno y, una vez testeado internamente, lo preparamos para conectar con tus sistemas.',
      image: 'assets/images/automatizacion/carousel3.jpg'
    },
    {
      title: 'Validación',
      text: 'Sesión de pruebas contigo o tu equipo. Validamos que el robot hace exactamente lo que debe hacer y ajustamos detalles finos.',
      image: 'assets/images/automatizacion/carousel4.jpg'
    },
    {
      title: 'Despliegue',
      text: '¡Luz verde! Encendemos los sistemas en producción. Tus procesos empiezan a funcionar solos.',
      image: 'assets/images/automatizacion/carousel5.jpg'
    },
    {
      title: 'Mejora Continua',
      text: 'No te dejamos solo. Monitorizamos el rendimiento, aplicamos mejoras A/B si es necesario y optimizamos para escalar.',
      image: 'assets/images/automatizacion/carousel6.jpg'
    }
  ];

  // DATA: Tech Stack (Logos visuales)
  techStack = [
    { name: 'Python', icon: 'assets/images/icons/Python-logo.svg' }, 
    { name: 'ChatGPT', icon: 'assets/images/logos/chatgpt.svg' },
    { name: 'Zapier', icon: 'assets/images/logos/zapier.png' },
    { name: 'Make', icon: 'assets/images/logos/make.png' },
    { name: 'n8n', icon: 'assets/images/logos/n8n.png' },
    { name: 'Notion', icon: 'assets/images/logos/notion.png' },
    { name: 'Google Workspace', icon: 'assets/images/logos/google_workspace.png' },
    { name: 'Telegram', icon: 'assets/images/logos/telegram.png' },
    { name: 'WhatsApp', icon: 'assets/images/logos/whatsapp.png' },
    { name: 'Shopify', icon: 'assets/images/logos/shopify.png' },
    { name: 'Slack', icon: 'assets/images/logos/slack.png' },
    { name: 'WooCommerce', icon: 'assets/images/logos/woocommerce.png' },
    { name: 'Airtable', icon: 'assets/images/logos/airtable.png' },
    { name: 'Trello', icon: 'assets/images/logos/trello.png' },
    { name: 'Gemini', icon: 'assets/images/logos/gemini.png' },
    { name: 'Grok', icon: 'assets/images/logos/grok.png' }
  ];

  // DATA: Casos de Uso (Ampliado)
  activeUseCase = 0;
  useCases = [
    {
      title: 'Marketing & RRSS',
      category: 'Empresa',
      icon: '📢',
      description: 'Convierte tu estrategia de contenidos en una máquina autónoma. Deja de copiar y pegar.',
      points: [
        { title: 'Generación de Contenido', desc: 'IA que redacta borradores y diseña posts básicos.' },
        { title: 'Atención 24/7', desc: 'Respuestas automáticas inteligentes a DMs y comentarios.' },
        { title: 'Lead Scoring', desc: 'Clasifica clientes potenciales automáticamente según su interacción.' }
      ]
    },
    {
      title: 'Gestión & Finanzas',
      category: 'Empresa',
      icon: '📊',
      description: 'Tu administración sin errores humanos. Finanzas al día, siempre.',
      points: [
        { title: 'Facturas Automáticas', desc: 'Generación y envío de facturas al cerrar un trato.' },
        { title: 'Lectura de Tickets', desc: 'Escanea gastos y los sube a tu Excel/ERP automáticamente.' },
        { title: 'Alertas de Tesorería', desc: 'Avisos automáticos si el flujo de caja baja de X.' }
      ]
    },
    {
      title: 'Ecommerce',
      category: 'Empresa',
      icon: '🛒',
      description: 'Vende mientras duermes y fideliza clientes sin esfuerzo manual.',
      points: [
        { title: 'Recuperación de Carritos', desc: 'Emails personalizados a quien no completó la compra.' },
        { title: 'Gestión de Stock', desc: 'Sincronización en tiempo real entre tienda física y online.' },
        { title: 'Chatbots de Soporte', desc: 'Resuelve dudas de envíos y devoluciones automáticamente.' }
      ]
    },
    {
      title: 'Estudios & Creatividad',
      category: 'Particular',
      icon: '🧠',
      description: 'Potencia tu aprendizaje y desbloquea tu creatividad con un asistente personal.',
      points: [
        { title: 'Resumidor de PDFs', desc: 'Chatea con tus apuntes y genera fichas de estudio al instante.' },
        { title: 'Tutor de Idiomas', desc: 'Practica conversación con una IA que corrige tu pronunciación.' },
        { title: 'Musa Digital', desc: 'Genera ideas, tramas o paletas de color para tus proyectos artísticos.' }
      ]
    },
    {
      title: 'Hogar & Bienestar',
      category: 'Particular',
      icon: '🏡',
      description: 'Tu casa y tu salud, gestionadas en piloto automático. Gana paz mental.',
      points: [
        { title: 'Smart Home Hub', desc: 'Luces y clima que se adaptan a tu rutina sin tocar un botón.' },
        { title: 'Agenda Familiar', desc: 'Calendario centralizado que avisa a todos de citas y eventos.' },
        { title: 'Coach de Salud', desc: 'Registro automático de hábitos y consejos de nutrición personalizados.' }
      ]
    }
  ];

  faqs = [
    { 
      question: "¿Qué tipo de procesos se pueden automatizar?", 
      answer: "Prácticamente cualquier proceso que sea repetitivo y basado en reglas (Si X, entonces Y). Esto incluye tareas administrativas (facturas, emails), gestión de datos (Excel, CRM), atención al cliente, marketing, organización personal y mucho más." 
    },
    { 
      question: "¿Cuánto tiempo lleva implementar esto?", 
      answer: "Depende de la complejidad. \n1) Diagnóstico: 48–72h. \n2) Prototipo: 1–2 semanas. \n3) Implementación: 1–3 semanas. \nPara automatizaciones sencillas personales, podemos tenerlo listo en días." 
    },
    { 
      question: "¿Qué herramientas utilizas?", 
      answer: "Selecciono lo mejor para tu caso priorizando coste y privacidad: Zapier, Make, n8n (para máxima privacidad), Google Scripts, y modelos de IA como GPT-4 o Claude. También integro herramientas que ya uses como Notion, Slack, WhatsApp o Shopify." 
    },
    { 
      question: "¿Qué pasa con mis datos? (Privacidad)", 
      answer: "La seguridad es innegociable. Cumplimos RGPD, aplicamos principio de mínima exposición (solo acceso a lo necesario) y cifrado. Para datos muy sensibles, ofrecemos instalaciones 'on-premise' con n8n, donde los datos nunca salen de tu servidor." 
    },
    { 
      question: "¿Trabajas con particulares?", 
      answer: "¡Sí! La automatización no es solo para empresas. Puedo ayudarte a organizar tus estudios, tus finanzas domésticas o tu hogar inteligente. Además, te enseño a gestionar tus propios bots." 
    },
    { 
      question: "¿La automatización me va a quitar el trabajo?", 
      answer: "Al contrario. Elimina las tareas de 'robot' que odias hacer para que puedas dedicarte a lo que te hace humano: crear, decidir y disfrutar." 
    }
  ];

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (prefersReducedMotion()) return;
    
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0, 
        y: 50, 
        duration: 1, 
        scrollTrigger: { trigger: section, start: 'top 85%' }
      });
    });
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }

  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
  
  isFaqOpen(index: number): boolean {
      return this.openFaqIndex === index;
  }

  setUseCase(index: number) {
    this.activeUseCase = index;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.submitSuccess = true;
      this.submitSuccessMessage = "¡Recibido! Mis bots te contactarán pronto.";
      form.resetForm();
    }, 1500);
  }
}