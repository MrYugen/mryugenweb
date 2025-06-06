import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioBrandingComponent } from './portfolio-branding/portfolio-branding.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
  // 1) La ruta raíz carga HomeComponent
  { path: '', component: HomeComponent },

  // 2) Proyectos de branding
  { path: 'portfolio/branding', component: PortfolioBrandingComponent },
  { path: 'portfolio/branding/:slug', component: ProjectDetailsComponent },

  // 3) Cualquier otra URL redirige a '' (Home)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
