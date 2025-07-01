import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';
import { ILLUSTRATIONS, Illustration } from './ilustraciones.data';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ilustraciones',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
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
  zoomed = false;
  modalOpen = false;
  activeIndex = 0;
  currentStep = 3;

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  toggleZoom(){ this.zoomed = !this.zoomed; }
  
  ngAfterViewInit() {
    gsap.utils.toArray<HTMLElement>('.illu-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out'
      });
    });
    ScrollTrigger.refresh();
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    document.body.classList.remove('overflow-hidden');
  }

  onImageLoad(event: Event) {
    (event.target as HTMLImageElement).classList.add('loaded');
  }

  openModal(i: number) {
    this.activeIndex = i;
    this.currentStep = 3;
    this.modalOpen = true;
    document.body.classList.add('overflow-hidden');
  }

  closeModal() {
    this.modalOpen = false;
    document.body.classList.remove('overflow-hidden');
  }

  nextIllustration() {
    this.activeIndex = (this.activeIndex + 1) % this.illustrations.length;
    this.currentStep = 3;
  }

  prevIllustration() {
    this.activeIndex = (this.activeIndex - 1 + this.illustrations.length) % this.illustrations.length;
    this.currentStep = 3;
  }

  setStep(i: number) {
    this.currentStep = i;
  }

  @HostListener('window:keyup.escape')
  onEscape() {
    if (this.modalOpen) this.closeModal();
  }
}
