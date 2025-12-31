import { Component, OnInit, AfterViewInit, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BlogService, BlogPost } from '../services/blog.service';
import { ThemeService } from '../services/theme.service';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../utils/motion.utils';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, MobileNavbarComponent, FooterComponent, ScrollToTopComponent, FormsModule, HttpClientModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post?: BlogPost;
  relatedPosts: BlogPost[] = [];
  
  currentUrl = '';
  isDarkMode = false;
  readingProgress = 0; // % de lectura

  // Newsletter
  email = '';
  submitting = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private theme: ThemeService,
    private http: HttpClient
  ) {
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  ngOnInit(): void {
    // Suscribirse a cambios de parámetros para recargar si pinchan en "Relacionados"
    this.route.paramMap.subscribe(params => {
        const slug = params.get('slug');
        if (slug) {
          this.post = this.blogService.getPostBySlug(slug);
          if (this.post) {
            this.relatedPosts = this.blogService.getRelatedPosts(this.post.slug, this.post.category);
          }
          window.scrollTo(0, 0); // Scroll arriba al cambiar
        }
    });

    if (typeof window !== 'undefined') {
      this.currentUrl = window.location.href;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.readingProgress = (window.scrollY / totalHeight) * 100;
  }

  onSubscribe() {
    this.successMessage = ''; this.errorMessage = '';
    const email = this.email?.trim();
    if (!/\S+@\S+\.\S+/.test(email)) { this.errorMessage = 'Por favor, introduce un email válido.'; return; }

    this.submitting = true;
    setTimeout(() => {
        this.submitting = false;
        this.successMessage = "¡Gracias! Te has unido al club.";
        this.email = '';
    }, 1500);
    this.http.post('/suscribir.php', { email }, { responseType: 'text' as const }).subscribe({
      next: (t) => {
        const res = (t || '').trim();
        if (res === 'OK')      this.successMessage = '¡Gracias por suscribirte!';
        else if (res === 'DUPLICATE') this.successMessage = 'Ya estabas suscrito 😊';
        else                   this.errorMessage = 'Respuesta inesperada: ' + res;
        this.submitting = false;
        if (this.successMessage) this.email = '';
      },
      error: (err) => {
        this.errorMessage = typeof err?.error === 'string' ? err.error : 'Error del servidor';
        this.submitting = false;
      }
    });
  }

  ngAfterViewInit() {
    if (prefersReducedMotion()) {
      return;
    }
    
    gsap.from('.post-content', { opacity: 0, y: 20, duration: 0.6 });
  }
}
