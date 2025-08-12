import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BlogService, BlogPost } from '../services/blog.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {
    this.posts = this.blogService.getPosts();
  }

  ngAfterViewInit() {
    gsap.from('.blog-card', { opacity: 0, y: 30, stagger: 0.2, duration: 0.6 });
  }
}