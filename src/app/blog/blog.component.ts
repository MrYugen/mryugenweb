import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BlogService, BlogPost } from '../services/blog.service';
import { ThemeService } from '../services/theme.service';
import { gsap } from 'gsap';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, HeroComponent, ScrollToTopComponent, MobileNavbarComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {
  posts: BlogPost[] = [];
  isDarkMode = false;

  constructor(private blogService: BlogService, private theme: ThemeService) {
    this.posts = this.blogService.getPosts();
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  ngAfterViewInit() {
    gsap.fromTo(
      '.blog-card',
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 }
    );
  }
}