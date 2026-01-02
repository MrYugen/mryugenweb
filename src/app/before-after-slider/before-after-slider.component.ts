import { Component, Input, HostListener, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-before-after-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-after-slider.component.html',
  styleUrls: ['./before-after-slider.component.css']
})
export class BeforeAfterSliderComponent implements OnDestroy, AfterViewInit {
  @Input() beforeImage!: string;
  @Input() afterImage!: string;
  @Input() altBefore: string = 'Boceto';
  @Input() altAfter: string = 'Resultado';

  @ViewChild('container') containerRef!: ElementRef; // Si necesitaras referencia directa

  ratio: number = 50;
  isDragging = false;
  isHovered = false;
  containerWidth = 0; // Para mantener la imagen after fija

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Calcular ancho inicial
    this.updateContainerWidth();
    
    // Pequeña animación de "tease" al cargar para mostrar interactividad
    setTimeout(() => {
      this.animateTease();
    }, 1000);
  }

  // Actualizar ancho al redimensionar ventana
  @HostListener('window:resize')
  onResize() {
    this.updateContainerWidth();
  }

  private updateContainerWidth() {
    // Obtenemos el ancho del componente host
    this.containerWidth = this.el.nativeElement.offsetWidth;
  }

  private animateTease() {
    // Movimiento sutil: 50 -> 55 -> 45 -> 50
    const steps = [55, 45, 50];
    let step = 0;
    
    const interval = setInterval(() => {
      if (step >= steps.length || this.isDragging || this.isHovered) {
        clearInterval(interval);
        if (!this.isDragging) this.ratio = 50; 
        return;
      }
      this.ratio = steps[step];
      step++;
    }, 200);
  }

  startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault(); // Evitar scroll en móviles
    this.isDragging = true;
    this.updateContainerWidth(); // Asegurar medida correcta al empezar
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    const clientX = (event as MouseEvent).clientX ?? (event as TouchEvent).touches[0].clientX;
    const rect = this.el.nativeElement.getBoundingClientRect();
    
    let x = clientX - rect.left;
    
    // Límites (para que el tirador no se salga del todo)
    x = Math.max(0, Math.min(x, rect.width));
    
    this.ratio = (x / rect.width) * 100;
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  stopDrag() {
    this.isDragging = false;
  }

  onKey(event: KeyboardEvent) {
    const step = 5;
    if (event.key === 'ArrowLeft') { 
      this.ratio = Math.max(0, this.ratio - step); 
    } else if (event.key === 'ArrowRight') { 
      this.ratio = Math.min(100, this.ratio + step); 
    }
  }

  ngOnDestroy() {
    // Limpieza si hiciera falta
  }
}