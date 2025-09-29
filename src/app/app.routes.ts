import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioBrandingComponent } from './portfolio-branding/portfolio-branding.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PortfolioWebComponent } from './portfolio-web/portfolio-web.component';
import { ProjectWebDetailsComponent } from './project-web-details/project-web-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AutomatizacionPageComponent } from './automatizacion-page/automatizacion-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AvisoLegalComponent } from './legal/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './legal/politica-privacidad/politica-privacidad.component';
import { PoliticaCookiesComponent } from './legal/politica-cookies/politica-cookies.component';
import { CondicionesGeneralesComponent } from './legal/condiciones-generales/condiciones-generales.component';
import { BuenasPracticasComponent } from './legal/buenas-practicas/buenas-practicas.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

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

  // 2c) Proyectos web
  { path: 'portfolio/web', component: PortfolioWebComponent },
  { path: 'portfolio/web/:slug', component: ProjectWebDetailsComponent },

  // Automatización de procesos
  { path: 'automation', component: AutomatizacionPageComponent },

  // Newsletter
  { path: 'newsletter', component: NewsletterComponent },

  // Página temporal de "En construcción"
  { path: 'under-construction', component: UnderConstructionComponent },

  // Textos legales
  { path: 'aviso-legal', component: AvisoLegalComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'politica-cookies', component: PoliticaCookiesComponent },
  { path: 'condiciones-generales', component: CondicionesGeneralesComponent },
  { path: 'buenas-practicas-tecnicas', component: BuenasPracticasComponent },

  // 3) Cualquier otra URL redirige a '' (Home)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
