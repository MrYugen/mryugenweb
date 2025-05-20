import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements AfterViewInit {
  @Input() isDarkMode: boolean = false;
  @ViewChild('heroHeading') heroHeading!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    if (this.heroHeading) {
      gsap.from(this.heroHeading.nativeElement, {
        opacity: 0,
        y: -40,
        duration: 2.5,
        ease: 'power3.out'
      });
    }
  }
}