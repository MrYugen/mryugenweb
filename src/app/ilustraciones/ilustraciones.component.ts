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
        'assets/images/swamp_ilustracion.png'
      ]
    },
    {
      title: 'Banner Swamp Labs',
      image: 'assets/images/swamp_banner_ilustracion.jpg',
      process: [
        'assets/images/Toad-Tuesdays-logo.gif',
        'assets/images/cocodrile_jacket.jpg',
        'assets/images/cocodrile_night.jpg',
        'assets/images/swamp_banner_ilustracion.jpg',
      ]
    },
    {
      title: 'Ariana Portrait',
      image: 'assets/images/Ari_illust_1.jpg',
      process: [
        'assets/images/Ari_illust_2.jpg',
        'assets/images/Ari_illust_3.jpg',
        'assets/images/Ari_illust_4.jpg',
        'assets/images/Ari_illust_1.jpg',
      ]
    },
    {
      title: 'Borrachera de fiesta',
      image: 'assets/images/borrachera_ilustracion.jpg',
      process: [
        'assets/images/borrachera_ilustracion2.jpg',
        'assets/images/borrachera_ilustracion3.jpg',
        'assets/images/borrachera_ilustracion4.jpg',
        'assets/images/borrachera_ilustracion.jpg',
      ]
    },
    {
      title: 'Jonny Portrait',
      image: 'assets/images/jonny_ilustracion.jpg',
      process: [
        'assets/images/jonny_ilustracion2.jpg',
        'assets/images/jonny_ilustracion3.jpg',
        'assets/images/jonny_ilustracion4.jpg',
        'assets/images/jonny_ilustracion.jpg',
      ]
    },
    {
      title: 'Life',
      image: 'assets/images/life_ilustracion.png',
      process: [
        'assets/images/life_ilustracion2.jpg',
        'assets/images/life_ilustracion3.jpg',
        'assets/images/life_ilustracion4.jpg',
        'assets/images/life_ilustracion.png',
      ]
    },
    {
      title: 'Hoy duermes en el sofá',
      image: 'assets/images/sofa_ilustracion.png',
      process: [
        'assets/images/sofa_ilustracion2.jpg',
        'assets/images/sofa_ilustracion3.jpg',
        'assets/images/sofa_ilustracion4.jpg',
        'assets/images/sofa_ilustracion.png',
      ]
    },
    {
      title: 'Tener un hobby',
      image: 'assets/images/hobby_ilustracion.png',
      process: [
        'assets/images/hobby_ilustracion2.jpg',
        'assets/images/hobby_ilustracion3.jpg',
        'assets/images/hobby_ilustracion4.jpg',
        'assets/images/hobby_ilustracion.png',
      ]
    },
    {
      title: 'Senses',
      image: 'assets/images/senses_final.jpg',
      process: [
        'assets/images/senses_lineas.png',
        'assets/images/senses_color_base.png',
        'assets/images/Senses_shadows.jpg',
        'assets/images/senses_final.jpg'
      ]
    },
    {
      title: 'Shadows',
      image: 'assets/images/ninja_ilustracion.png',
      process: [
        'assets/images/ninja_ilustracion2.jpg',
        'assets/images/ninja_ilustracion3.jpg',
        'assets/images/ninja_ilustracion4.jpg',
        'assets/images/ninja_ilustracion.png',
      ]
    },
    {
      title: 'Pili Portrait',
      image: 'assets/images/pili_ilustracion.png',
      process: [
        'assets/images/pili_ilustracion2.jpg',
        'assets/images/pili_ilustracion3.jpg',
        'assets/images/pili_ilustracion4.jpg',
        'assets/images/pili_ilustracion.png'
      ]
    },
    {
      title: 'Sam Portrait',
      image: 'assets/images/sam_ilustracion.png',
      process: [
        'assets/images/sam_ilustracion2.jpg',
        'assets/images/sam_ilustracion3.jpg',
        'assets/images/sam_ilustracion4.jpg',
        'assets/images/sam_ilustracion.png'
      ]
    },
    {
      title: 'Liv Portrait',
      image: 'assets/images/liv_ilustracion.jpg',
      process: [
        'assets/images/liv_ilustracion2.jpg',
        'assets/images/liv_ilustracion3.jpg',
        'assets/images/liv_ilustracion4.jpg',
        'assets/images/liv_ilustracion.jpg'
      ]
    },
    {
      title: 'Laura Portrait',
      image: 'assets/images/laura_ilustracion.jpg',
      process: [
        'assets/images/laura_ilustracion2.jpg',
        'assets/images/laura_ilustracion3.jpg',
        'assets/images/laura_ilustracion4.jpg',
        'assets/images/laura_ilustracion.jpg'
      ]
    },
    {
      title: 'SANDwich',
      image: 'assets/images/sandwich_ilustracion.png',
      process: [
        'assets/images/sandwich_ilustracion2.jpg',
        'assets/images/sandwich_ilustracion3.jpg',
        'assets/images/sandwich_ilustracion4.jpg',
        'assets/images/sandwich_ilustracion.png'
      ]
    },
    {
      title: 'Penny Portrait Coin',
      image: 'assets/images/penny_ilustracion.png',
      process: [
        'assets/images/penny_ilustracion2.jpg',
        'assets/images/penny_ilustracion3.jpg',
        'assets/images/penny_ilustracion4.jpg',
        'assets/images/penny_ilustracion.png'
      ]
    },
    {
      title: 'Comprar en pijama',
      image: 'assets/images/pijama_ilustracion.jpg',
      process: [
        'assets/images/pijama_ilustracion2.jpg',
        'assets/images/pijama_ilustracion3.jpg',
        'assets/images/pijama_ilustracion4.png',
        'assets/images/pijama_ilustracion.jpg'
      ]
    },
    {
      title: 'Cupón de Masaje',
      image: 'assets/images/masaje_ilustracion.jpg',
      process: [
        'assets/images/masaje_ilustracion2.jpg',
        'assets/images/masaje_ilustracion3.jpg',
        'assets/images/masaje_ilustracion4.jpg',
        'assets/images/masaje_ilustracion.jpg'
      ]
    },
    {
      title: 'Retratos en acuarela',
      image: 'assets/images/pris_watercolor_ilustracion.jpg',
      process: [
        'assets/images/watercolor_ilustracion2.jpg',
        'assets/images/watercolor_ilustracion3.jpg',
        'assets/images/watercolor_ilustracion4.jpg',
        'assets/images/pris_watercolor_ilustracion.jpg'
      ]
    },
    {
      title: 'Cuadros para decoración',
      image: 'assets/images/decoration_ilustracion.jpg',
      process: [
        'assets/images/decoration_ilustracion2.jpg',
        'assets/images/decoration_ilustracion3.jpg',
        'assets/images/decoration_ilustracion4.jpg',
        'assets/images/decoration_ilustracion.jpg'
      ]
    },
    {
      title: 'Encargos personalizados',
      image: 'assets/images/encargo_ilustracion.jpg',
      process: [
        'assets/images/encargo_ilustracion2.jpg',
        'assets/images/encargo_ilustracion3.jpg',
        'assets/images/encargo_ilustracion4.jpg',
        'assets/images/encargo_ilustracion.jpg'
      ]
    },
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
