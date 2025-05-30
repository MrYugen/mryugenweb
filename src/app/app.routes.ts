import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioBrandingComponent } from './portfolio-branding/portfolio-branding.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz
  { path: 'portfolio/branding', component: PortfolioBrandingComponent },
  // Ruta dinámica para cada proyecto de branding
  { path: 'portfolio/branding/:slug', component: ProjectDetailsComponent },
];
