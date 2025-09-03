import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-under-construction',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css'
})
export class UnderConstructionComponent {
  /** Imagen de fondo para la página completa */
  @Input() backgroundImage: string = '../assets/images/hero-bg-light.jpg';

  /** Título principal mostrado en la página */
  @Input() title: string = 'En construcción';

  /** Subtítulo opcional */
  @Input() subtitle: string = 'Estamos trabajando en ello';

  /** Mensaje descriptivo */
  @Input() message: string = 'Vuelve pronto para descubrir las novedades.';

  /** Evento emitido con el email del usuario al pulsar "Notifícame" */
  @Output() notify = new EventEmitter<string>();

  /** Modelo para el input del correo */
  email = '';

  onNotify() {
    if (this.email) {
      this.notify.emit(this.email);
      this.email = '';
    }
  }
}