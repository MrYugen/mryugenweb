import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { ThemeService } from '../services/theme.service';
import { WEB_PROJECTS, WebProject } from '../project-web-details/web-projects.data'

@Component({
  selector: 'app-project-web-details',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, HeroComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './project-web-details.component.html',
  styleUrls: ['./project-web-details.component.css']
})
export class ProjectWebDetailsComponent implements OnInit {
  slug: string = '';
  project: WebProject | undefined;
  isDarkMode = false;

  constructor(private route: ActivatedRoute, private theme: ThemeService) {
    this.isDarkMode = this.theme.isDark();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.project = WEB_PROJECTS.find(p => p.slug === this.slug);
      window.scrollTo({ top: 0 });
    });
  }

  toggleTheme() { this.isDarkMode = this.theme.toggle(); }
}
