import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class BlogDetailComponent implements OnInit, AfterViewInit {
  post?: BlogPost;
  currentUrl = '';
  isDarkMode = false;

  // Newsletter form state
  email: string = '';
  submitting = false;
  successMessage = '';
  errorMessage = '';

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
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.post = this.blogService.getPostBySlug(slug);
    }
    if (typeof window !== 'undefined') {
      this.currentUrl = window.location.href;
    }
  }

  onSubscribe() {
  this.errorMessage = "";
  this.successMessage = "";

  const emailTrim = this.email.trim();
  const emailValido = /\S+@\S+\.\S+/.test(emailTrim);
  if (!emailValido) {
    this.errorMessage = 'Por favor, introduce un email válido.';
    return;
  }

  // Opcional: para pedir nombre en la suscripción, incluirlo
  const datos = { email: emailTrim /*, name: this.nombre ?? "" */ };

  this.submitting = true;
  this.http.post('/suscribir.php', datos, { responseType: 'text' })
    .subscribe({
      next: (res) => {
        this.submitting = false;
        if (res === 'OK' || res === 'DUPLICATE') {
          // 'DUPLICATE' lo tratamos como suscripción exitosa también, porque ya existe
          this.successMessage = 'Gracias por suscribirte. Revisa tu correo para confirmar.';
          this.email = "";
        } else {
          // Cualquier otro texto inesperado
          console.warn("Respuesta de suscripción:", res);
          this.errorMessage = 'Hubo un problema al suscribirte. Intenta más tarde.';
        }
      },
      error: () => {
        this.submitting = false;
        this.errorMessage = 'Error de servidor. Por favor, inténtalo de nuevo más tarde.';
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
