import { Component, Input, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-before-after-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-after-slider.component.html',
  styleUrls: ['./before-after-slider.component.css']
})
export class BeforeAfterSliderComponent implements OnDestroy {
  @Input() beforeImage!: string;
  @Input() afterImage!: string;
  @Input() altBefore: string = 'Antes';
  @Input() altAfter: string = 'Después';

  // porcentaje visible de la imagen 'after'
  ratio: number = 50;
  private dragging = false;

  // Cuando el usuario pulsa o toca el handle
  startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.dragging = true;
  }

  // Moviendo ratón o dedo
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;
    const clientX = (event as MouseEvent).clientX ?? (event as TouchEvent).touches[0].clientX;
    // referimos al ancho del contenedor
    const container = (event.target as HTMLElement).closest('.ba-slider') as HTMLElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    this.ratio = (x / rect.width) * 100;
  }

  onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') { this.ratio = Math.max(0, this.ratio - 5); }
    if (event.key === 'ArrowRight') { this.ratio = Math.min(100, this.ratio + 5); }
  }

  // Suelta el handle
  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  endDrag() {
    this.dragging = false;
  }

  ngOnDestroy() {
    // No hay suscripciones explícitas que limpiar
  }
}
