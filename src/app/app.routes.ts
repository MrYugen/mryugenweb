import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioBrandingComponent } from './portfolio-branding/portfolio-branding.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz
  { path: 'portfolio/branding', component: PortfolioBrandingComponent }, // <-- nueva ruta
];
