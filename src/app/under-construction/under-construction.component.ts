import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ThemeService } from '../services/theme.service';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavbarComponent, MobileNavbarComponent, FooterComponent, HttpClientModule],
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent {
  /** Imagen de fondo para la página completa */
  @Input() backgroundImage: string = '../assets/images/under-construction/hero-under-construction.jpg';

  /** Título principal mostrado en la página */
  @Input() title: string = 'Couple Clash llega pronto';

  /** Subtítulo opcional */
  @Input() subtitle: string = 'Cargando… 99%';

  /** Mensaje descriptivo */
  @Input() message: string = 'Couple Clash está muy cerca de su lanzamiento. Sin duda, estoy seguro de que te encantará y se convertirá en uno de tus juegos favoritos. Déjame tu email y entra en la primera oleada: actualizaciones, acceso anticipado, descuento especial en las primeras 48 horas del lanzamiento y sorpresas exclusivas.';

  /** Evento emitido con el email del usuario al pulsar "Notifícame" */
  @Output() notify = new EventEmitter<string>();

  /** Modelo para el input del correo */
  email = '';

  // Estado UI
  isDarkMode = false;

  submitSuccess = false;
  submitSuccessMessage = '';
  submitError = false;
  submitErrorMessage = '';
  isSubmitting = false;

  constructor(private theme: ThemeService, private http: HttpClient) {
    // Inicializa el tema según preferencia guardada
    this.isDarkMode = this.theme.isDark();
  }

  // Cambia el tema y actualiza estado
  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  onNotify(subscribeForm: NgForm) {
    if (!subscribeForm) {
      return;
    }

    if (subscribeForm.invalid) {
      subscribeForm.form.markAllAsTouched();
      return;
    }

    this.submitSuccess = false;
    this.submitSuccessMessage = '';
    this.submitError = false;
    this.submitErrorMessage = '';
    this.isSubmitting = true;

    const trimmedEmail = this.email.trim();

    this.http.post('/suscribir.php', { email: trimmedEmail }, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;

          if (res === 'OK') {
            this.submitSuccess = true;
            this.submitSuccessMessage = 'Te avisaremos cuando el sitio este listo.';
            this.notify.emit(trimmedEmail);
            subscribeForm.resetForm({ email: '' });
            this.email = '';
          } else if (res === 'DUPLICATE') {
            this.submitSuccess = true;
            this.submitSuccessMessage = 'Ya estabas en la lista. Te avisaremos igualmente.';
            this.notify.emit(trimmedEmail);
            subscribeForm.resetForm({ email: '' });
            this.email = '';
          } else {
            this.submitError = true;
            this.submitErrorMessage = 'Respuesta inesperada del servidor. Intentalo de nuevo mas tarde.';
          }
        },
        error: (err: HttpErrorResponse) => {
          this.isSubmitting = false;
          this.submitSuccess = false;
          this.submitError = true;

          const serverMessage = typeof err?.error === 'string' ? err.error.trim() : '';
          if (serverMessage) {
            this.submitErrorMessage = serverMessage;
          } else if (err?.status === 0) {
            this.submitErrorMessage = 'No se pudo conectar con el servidor. Comprueba tu conexion e intentalo otra vez.';
          } else if (err?.status === 400) {
            this.submitErrorMessage = 'El email introducido no es valido.';
          } else if (err?.status >= 500) {
            this.submitErrorMessage = 'Ocurrio un error en el servidor. Intentalo de nuevo mas tarde.';
          } else {
            this.submitErrorMessage = 'No se pudo registrar tu email. Intentalo de nuevo.';
          }
        }
      });
  }

}

