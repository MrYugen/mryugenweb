import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   // 1) La ruta raíz carga HomeComponent (Eager load para LCP óptimo en la home)
  { path: '', component: HomeComponent },

  // Blog
  {  
    path: 'blog', 
    loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent) 
  },
  { 
    path: 'blog/:slug', 
    loadComponent: () => import('./blog-detail/blog-detail.component').then(m => m.BlogDetailComponent) 
  },

  // 2) Proyectos de branding
  {  
    path: 'portfolio/branding', 
    loadComponent: () => import('./portfolio-branding/portfolio-branding.component').then(m => m.PortfolioBrandingComponent) 
  },
  { 
    path: 'portfolio/branding/:slug', 
    loadComponent: () => import('./project-details/project-details.component').then(m => m.ProjectDetailsComponent) 
  },

  // 2b) Ilustraciones
  {    
    path: 'portfolio/illustration', 
    loadComponent: () => import('./ilustraciones/ilustraciones.component').then(m => m.IlustracionesComponent) 
  },

  // 2c) Proyectos web
  { 
    path: 'portfolio/web', 
    loadComponent: () => import('./portfolio-web/portfolio-web.component').then(m => m.PortfolioWebComponent) 
  },
  { 
    path: 'portfolio/web/:slug', 
    loadComponent: () => import('./project-web-details/project-web-details.component').then(m => m.ProjectWebDetailsComponent) 
  },

  // Automatización de procesos
  { 
    path: 'automation', 
    loadComponent: () => import('./automatizacion-page/automatizacion-page.component').then(m => m.AutomatizacionPageComponent) 
  },

  // Newsletter
  { 
    path: 'newsletter', 
    loadComponent: () => import('./newsletter/newsletter.component').then(m => m.NewsletterComponent) 
  },

  // Página temporal de "En construcción"
  { 
    path: 'under-construction', 
    loadComponent: () => import('./under-construction/under-construction.component').then(m => m.UnderConstructionComponent) 
  },

  // Textos legales
  { 
    path: 'aviso-legal', 
    loadComponent: () => import('./legal/aviso-legal/aviso-legal.component').then(m => m.AvisoLegalComponent) 
  },
  { 
    path: 'politica-privacidad', 
    loadComponent: () => import('./legal/politica-privacidad/politica-privacidad.component').then(m => m.PoliticaPrivacidadComponent) 
  },
  { 
    path: 'politica-cookies', 
    loadComponent: () => import('./legal/politica-cookies/politica-cookies.component').then(m => m.PoliticaCookiesComponent) 
  },
  { 
    path: 'condiciones-generales', 
    loadComponent: () => import('./legal/condiciones-generales/condiciones-generales.component').then(m => m.CondicionesGeneralesComponent) 
  },
  { 
    path: 'buenas-practicas-tecnicas', 
    loadComponent: () => import('./legal/buenas-practicas/buenas-practicas.component').then(m => m.BuenasPracticasComponent) 
  },

  // 3) Cualquier otra URL redirige a '' (Home)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
