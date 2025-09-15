import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavbarComponent, MobileNavbarComponent, FooterComponent],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css'
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

  constructor(private theme: ThemeService) {
    // Inicializa el tema según preferencia guardada
    this.isDarkMode = this.theme.isDark();
  }

  // Cambia el tema y actualiza estado
  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  onNotify() {
    if (this.email) {
      this.notify.emit(this.email);
      this.email = '';
    }
  }
}
