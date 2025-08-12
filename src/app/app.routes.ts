import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioBrandingComponent } from './portfolio-branding/portfolio-branding.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const routes: Routes = [
  // 1) La ruta raíz carga HomeComponent
  { path: '', component: HomeComponent },

  // Blog
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },

  // 2) Proyectos de branding
  { path: 'portfolio/branding', component: PortfolioBrandingComponent },
  { path: 'portfolio/branding/:slug', component: ProjectDetailsComponent },

  // 2b) Ilustraciones
  { path: 'portfolio/illustration', component: IlustracionesComponent },

  // 3) Cualquier otra URL redirige a '' (Home)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
