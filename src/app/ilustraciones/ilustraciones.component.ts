import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';
import { ILLUSTRATIONS, Illustration } from './ilustraciones.data';
import { prefersReducedMotion } from '../utils/motion.utils';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ilustraciones',
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
  templateUrl: './ilustraciones.component.html',
  styleUrls: ['./ilustraciones.component.css']
})
export class IlustracionesComponent implements AfterViewInit, OnDestroy {
  isDarkMode = false;
  illustrations = ILLUSTRATIONS;
  
  // Lightbox State
  modalOpen = false;
  activeIndex = 0;
  currentStep = 3; 

  // Zoom / Drag State
  zoomed = false;
  isDragging = false;
  dragStart = { x: 0, y: 0 };
  imgOffset = { x: 0, y: 0 };
  imgLastOffset = { x: 0, y: 0 };
  
  // Touch Specific
  touchActive = false;

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  ngAfterViewInit() {
    if (prefersReducedMotion()) return;
    
    // Animación Stagger más elegante para el Grid
    gsap.from('.illu-card', {
      duration: 0.8,
      opacity: 0,
      y: 60,
      stagger: 0.1, // Efecto cascada entre elementos
      ease: 'power3.out',
      scrollTrigger: {
        trigger: 'main',
        start: 'top 80%'
      }
    });
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    this.unlockBody();
  }

  onImageLoad(event: Event) {
    (event.target as HTMLElement).classList.add('loaded');
  }

  // --- LIGHTBOX LOGIC ---

  openModal(index: number) {
    this.activeIndex = index;
    // Asumimos que la última imagen es siempre la final
    this.currentStep = this.illustrations[index].process.length - 1; 
    this.modalOpen = true;
    this.resetZoom();
    this.lockBody();
  }

  closeModal() {
    this.modalOpen = false;
    this.resetZoom();
    this.unlockBody();
  }

  nextIllustration() {
    this.activeIndex = (this.activeIndex + 1) % this.illustrations.length;
    this.currentStep = this.illustrations[this.activeIndex].process.length - 1;
    this.resetZoom();
  }

  prevIllustration() {
    this.activeIndex = (this.activeIndex - 1 + this.illustrations.length) % this.illustrations.length;
    this.currentStep = this.illustrations[this.activeIndex].process.length - 1;
    this.resetZoom();
  }

  setStep(index: number) {
    this.currentStep = index;
  }

  // Helper para las etiquetas del Timeline
  getStepLabel(index: number): string {    
    const total = this.illustrations[this.activeIndex].process.length;
    if (index === 0) return 'Boceto';
    if (index === total - 1) return 'Final';
    if (index === 1) return 'Línea';
    if (index === 2) return 'Color';
    return `Paso ${index + 1}`;
  }

  // --- ZOOM & DRAG LOGIC ---

  toggleZoom() {
    this.zoomed = !this.zoomed;
    if (!this.zoomed) {
      this.resetZoom();
    }
  }

  resetZoom() {
    this.zoomed = false;
    this.imgOffset = { x: 0, y: 0 };
    this.imgLastOffset = { x: 0, y: 0 };
  }

  startDrag(event: MouseEvent) {
    if (!this.zoomed) return;
    this.isDragging = true;
    this.dragStart = { x: event.clientX, y: event.clientY };
    event.preventDefault(); // Evita selecciones de texto
  }

  onDrag(event: MouseEvent) {
    if (!this.zoomed || !this.isDragging) return;
    const dx = event.clientX - this.dragStart.x;
    const dy = event.clientY - this.dragStart.y;
    this.imgOffset = {
      x: this.imgLastOffset.x + dx,
      y: this.imgLastOffset.y + dy
    };
  }

  endDrag() {
    if (!this.zoomed) return;
    this.isDragging = false;
    this.imgLastOffset = { ...this.imgOffset };
  }

  // Touch Events
  onTouchStartImage(event: TouchEvent) {
    if (!this.zoomed) return;
    this.touchActive = true;
    this.isDragging = true;
    const touch = event.touches[0];
    this.dragStart = { x: touch.clientX, y: touch.clientY };
  }

  onTouchMoveImage(event: TouchEvent) {
    if (!this.zoomed || !this.touchActive) return;
    const touch = event.touches[0];
    const dx = touch.clientX - this.dragStart.x;
    const dy = touch.clientY - this.dragStart.y;
    this.imgOffset = {
      x: this.imgLastOffset.x + dx,
      y: this.imgLastOffset.y + dy
    };
    event.preventDefault(); // Evita scroll de la página fondo
  }

  onTouchEndImage() {
    this.isDragging = false;
    this.touchActive = false;
    this.imgLastOffset = { ...this.imgOffset };
  }

  // --- UTILS ---
  
  @HostListener('window:keyup.escape')
  onEscape() {
    if (this.modalOpen) this.closeModal();
  }

  @HostListener('window:keydown.arrowright')
  onArrowRight() {
    if (this.modalOpen) this.nextIllustration();
  }

  @HostListener('window:keydown.arrowleft')
  onArrowLeft() {
    if (this.modalOpen) this.prevIllustration();
  }

  private lockBody() {
    document.body.style.overflow = 'hidden';
  }

  private unlockBody() {
    document.body.style.overflow = '';
  }
}