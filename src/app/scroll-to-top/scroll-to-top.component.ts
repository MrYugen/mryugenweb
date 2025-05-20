import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-6 right-6 z-50">
      <button
        #scrollBtn
        *ngIf="visible"
        (click)="scrollToTop()"
        (mouseenter)="showTooltip = true"
        (mouseleave)="showTooltip = false"
        [ngClass]="{
          'opacity-100 translate-y-0': visible,
          'opacity-0 translate-y-4 pointer-events-none': !visible
        }"
        class="transition-all duration-500 bg-cta text-white p-3 rounded-full shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cta"
        aria-label="Subir arriba"
      >
        ↑
      </button>
      <!-- Tooltip -->
      <div
        *ngIf="showTooltip && visible"
        class="absolute right-14 bottom-1/2 translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-xs shadow-lg pointer-events-none select-none transition-opacity duration-300"
      >
        Subir arriba
      </div>
    </div>
  `,
  styles: []
})
export class ScrollToTopComponent {
  visible = false;
  showTooltip = false;
  @ViewChild('scrollBtn') scrollBtn!: ElementRef<HTMLButtonElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.visible = window.scrollY > 250;
  }

  scrollToTop() {
    // Microanimación bounce con GSAP
    if (this.scrollBtn) {
      gsap.fromTo(
        this.scrollBtn.nativeElement,
        { scale: 1 },
        { scale: 1.2, yoyo: true, repeat: 1, duration: 0.18, ease: 'power1.inOut' }
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
