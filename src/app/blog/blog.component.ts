import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para el buscador
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BlogService, BlogPost } from '../services/blog.service';
import { ThemeService } from '../services/theme.service';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/motion.utils';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent, HeroComponent, ScrollToTopComponent, MobileNavbarComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {
  allPosts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  categories: string[] = [];
  
  isDarkMode = false;
  activeCategory = 'Todos';
  searchTerm = '';

  constructor(private blogService: BlogService, private theme: ThemeService) {
    this.allPosts = this.blogService.getPosts();
    this.filteredPosts = [...this.allPosts]; // Inicialmente todos
    this.categories = this.blogService.getCategories();
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  ngAfterViewInit() {
    if (prefersReducedMotion()) return;
    this.animateGrid();
  }

  filterCategory(category: string) {
    this.activeCategory = category;
    this.filterPosts();
  }

  filterPosts() {
    // 1. Filtro por Categoría
    let temp = this.activeCategory === 'Todos' 
      ? this.allPosts 
      : this.allPosts.filter(p => p.category === this.activeCategory);

    // 2. Filtro por Buscador
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      temp = temp.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.excerpt.toLowerCase().includes(term) ||
        p.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    this.filteredPosts = temp;
    
    // Re-animar el grid suavemente al filtrar
    setTimeout(() => this.animateGrid(), 10);
  }

  resetFilters() {
    this.activeCategory = 'Todos';
    this.searchTerm = '';
    this.filterPosts();
  }

  animateGrid() {
    gsap.fromTo('.reveal-card', 
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', clearProps: 'all' }
    );
  }
}