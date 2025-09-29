import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarComponent,
    MobileNavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  isDarkMode = false;

  name = '';
  email = '';
  privacyAccepted = false;

  submitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private theme: ThemeService, private http: HttpClient) {
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }

  onSubmit(form: NgForm) {
    this.clearFeedback();

    if (form.invalid || !this.privacyAccepted) {
      this.errorMessage = 'Revisa los campos y acepta la política de privacidad.';
      return;
    }

    const payload = {
      name: this.name.trim(),
      email: this.email.trim()
    };

    this.submitting = true;

    // Usa RUTA RELATIVA para evitar problemas de origen (www / sin www)
    this.http.post('/newsletter-subscribe.php', payload, { responseType: 'text' as const })
      .subscribe({
        next: (res) => {
          this.submitting = false;
          if (res === 'OK' || res === 'DUPLICATE') {
            this.successMessage = '¡Gracias! Te he apuntado a la newsletter.';
            form.resetForm({ name: '', email: '', privacyAccepted: false });
          } else {
            this.errorMessage = 'Respuesta inesperada del servidor: ' + res;
          }
        },
        error: (err: HttpErrorResponse) => {
          this.submitting = false;
          this.errorMessage = 'No se pudo completar la suscripción. Inténtalo de nuevo.';
          // Opcional: log en consola para depurar
          console.error('newsletter-subscribe error', err);
        }
      });
  }

  clearFeedback() {
    if (!this.submitting) {
      this.successMessage = '';
      this.errorMessage = '';
    }
  }
}