import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-branding',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './portfolio-branding.component.html',
  styleUrls: ['./portfolio-branding.component.css']
})


export class PortfolioBrandingComponent {
  isDarkMode = false;

  // ¡AQUÍ empieza lo importante!
  brandingSteps = [
    {
      title: '1. Investigación',
      text: 'Analizo tu sector, tus competidores y tu público objetivo para entender el contexto de tu marca y encontrar oportunidades únicas.',
      image: 'assets/images/branding_investiga.png'
    },
    {
      title: '2. Moodboard',
      text: 'Recojo referencias visuales, paletas de color y estilos que inspiran y definen la atmósfera que tendrá tu identidad visual.',
      image: 'assets/images/branding_moodboard.png'
    },
    {
      title: '3. Boceto',
      text: 'A lápiz y papel, empiezo a plasmar ideas, logotipos y conceptos iniciales, dando forma a las primeras propuestas gráficas.',
      image: 'assets/images/branding_bocetos.png'
    },
    {
      title: '4. Revisión y diseño final',
      text: 'Juntos analizamos y pulimos las propuestas. Ajusto detalles, colores y tipografía hasta que tu marca te represente al 100%.',
      image: 'assets/images/branding_revision.png'
    },
    {
      title: '5. Entrega',
      text: 'Te entrego todos los archivos y aplicaciones de tu nueva identidad: logotipo, manual, mockups y consejos para empezar a usarla.',
      image: 'assets/images/branding_entrega.png'
    }
  ];

  currentStep = 0;

  private startX = 0;

  constructor(
  private theme: ThemeService,
  private router: Router
) {
  this.isDarkMode = this.theme.isDark();

  // Scroll al top al cargar esta ruta
  this.router.events
    .pipe(filter(e => e instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
}

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  // Flechas desktop
  prevSlide() {
    if (this.currentStep > 0) this.currentStep--;
    else this.currentStep = this.brandingSteps.length - 1;
  }

  nextSlide() {
    if (this.currentStep < this.brandingSteps.length - 1) this.currentStep++;
    else this.currentStep = 0;
  }

  goToSlide(i: number) {
    this.currentStep = i;
  }

  // Swipe táctil
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    const delta = endX - this.startX;
    if (delta > 50) this.prevSlide();
    if (delta < -50) this.nextSlide();
  }
}
