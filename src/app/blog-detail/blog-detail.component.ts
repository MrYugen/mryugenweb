import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BlogService, BlogPost } from '../services/blog.service';
import { ThemeService } from '../services/theme.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, AfterViewInit {
  post?: BlogPost;
  currentUrl = '';
  isDarkMode = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private theme: ThemeService
  ) {
    this.isDarkMode = this.theme.isDark();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.toggle();
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.post = this.blogService.getPostBySlug(slug);
    }
    if (typeof window !== 'undefined') {
      this.currentUrl = window.location.href;
    }
  }

  ngAfterViewInit() {
    gsap.from('.post-content', { opacity: 0, y: 20, duration: 0.6 });
  }
}