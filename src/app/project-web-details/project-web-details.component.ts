import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';
import { WEB_PROJECTS, WebProject } from '../project-web-details/web-projects.data'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-web-details',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MobileNavbarComponent, HeroComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './project-web-details.component.html',
  styleUrls: ['./project-web-details.component.css']
})
export class ProjectWebDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  slug: string = '';
  project: WebProject | undefined;
  isDarkMode = false;
  @ViewChildren('logicVideo') logicVideos!: QueryList<ElementRef<HTMLVideoElement>>;

  private videoObservers: IntersectionObserver[] = [];
  private autoplayedOnce = new WeakSet<HTMLVideoElement>();

  constructor(private route: ActivatedRoute, private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.project = WEB_PROJECTS.find(p => p.slug === this.slug);
      window.scrollTo({ top: 0 });
    });
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }

  ngAfterViewInit(): void {
    // Animaciones de aparición con GSAP al hacer scroll
    setTimeout(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1.0,
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
          delay: i * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80px',
            toggleActions: 'play none none none',
            once: true
          }
        });
      });

      ScrollTrigger.refresh();
    }, 0);

    // Observadores para videos de la lógica técnica
    // Se re-inicializan si la lista de videos cambia (por cambio de proyecto o de vista)
    this.initVideoObservers();
    this.logicVideos?.changes.subscribe(() => this.initVideoObservers());
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(t => t.kill());
    this.teardownVideoObservers();
  }

  // Determina si una URL corresponde a un video soportado
  isVideo(url?: string): boolean {
    if (!url) return false;
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
  }

  private initVideoObservers(): void {
    this.teardownVideoObservers();
    if (!this.logicVideos || this.logicVideos.length === 0) return;

    const options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.5 };

    this.logicVideos.forEach(ref => {
      const video = ref.nativeElement;
      // Asegurar estado sin controles ni PIP, inline y silenciado (autoplay cross-browser)
      try {
        video.controls = false;
        // muted y playsInline ya están en plantilla; reforzamos aquí por si el navegador lo requiere
        video.muted = true;
        (video as any).playsInline = true;
        (video as any).disablePictureInPicture = true;
      } catch {}

      // Reproducir al hacer click (replay), sin permitir pausar ni otros controles
      const clickHandler = () => {
        try {
          video.currentTime = 0;
          void video.play();
        } catch {}
      };
      video.addEventListener('click', clickHandler);

      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.autoplayedOnce.has(video)) {
            try {
              // Reproducir automáticamente una vez al entrar en viewport
              void video.play().then(() => {
                this.autoplayedOnce.add(video);
              }).catch(() => {
                // Si el navegador bloquea autoplay por alguna política, no hacemos nada.
              });
            } catch {}
          }
        });
      }, options);

      io.observe(video);
      this.videoObservers.push(io);

      // Limpieza al finalizar: no hacemos loop automático, solo replay manual
      const endedHandler = () => {
        try {
          video.pause();
        } catch {}
      };
      video.addEventListener('ended', endedHandler);

      // Guardar referencias de handlers para potencial extensión futura si se requiere quitarlos
    });
  }

  private teardownVideoObservers(): void {
    this.videoObservers.forEach(io => io.disconnect());
    this.videoObservers = [];
  }
}
