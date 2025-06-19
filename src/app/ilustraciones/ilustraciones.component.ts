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

gsap.registerPlugin(ScrollTrigger);

interface Illustration {
  title: string;
  image: string;
  process: string[]; // [boceto, color base, luces, final]
}

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

  illustrations: Illustration[] = [
    {
      title: 'Swamp Labs',
      image: 'assets/images/swamp_ilustracion.png',
      process: [
        'assets/images/swamp_ilustracion2.jpg',
        'assets/images/swamp_ilustracion3.jpg',
        'assets/images/swamp_ilustracion4.jpg',
        'assets/images/swamp_ilustracion.jpg'
      ]
    },
    {
      title: 'Banner Swamp Labs',
      image: 'assets/images/swamp_banner_ilustracion.jpg',
      process: [
        'assets/images/Toad-Tuesdays-logo.gif',
        'assets/images/swamp_banner_ilustracion.jpg',
      ]
    },
    {
      title: 'Ariana',
      image: 'assets/images/Ari_illust_1.jpg',
      process: [
        'assets/images/Ari_illust_1.jpg',
        'assets/images/Ari_illust_2.jpg',
        'assets/images/Ari_illust_3.jpg',
        'assets/images/Ari_illust_4.jpg'
      ]
    },
    {
      title: 'Ilustración 2',
      image: 'assets/images/borrachera_ilustracion.png',
      process: [
        'assets/images/borrachera_ilustracion.png',
        'assets/images/borrachera_ilustracion2.png',
        'assets/images/borrachera_ilustracion3.png',
        'assets/images/borrachera_ilustracion4.png'
      ]
    },
    {
      title: 'Ilustración 3',
      image: 'assets/images/jonny_ilustracion.png',
      process: [
        'assets/images/jonny_ilustracion.png',
        'assets/images/jonny_ilustracion2.png',
        'assets/images/jonny_ilustracion3.png',
        'assets/images/jonny_ilustracion4.png'
      ]
    },
    {
      title: 'Ilustración 4',
      image: 'assets/images/life_ilustracion.png',
      process: [
        'assets/images/life_ilustracion.png',
        'assets/images/life_ilustracion2.png',
        'assets/images/life_ilustracion3.png',
        'assets/images/life_ilustracion4.png'
      ]
    }
  ];

  modalOpen = false;
  activeIndex = 0;
  currentStep = 3;

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

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
  }

  onImageLoad(event: Event) {
    (event.target as HTMLImageElement).classList.add('loaded');
  }

  openModal(i: number) {
    this.activeIndex = i;
    this.currentStep = 3;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
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
