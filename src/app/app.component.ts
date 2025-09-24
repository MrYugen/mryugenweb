import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';  // Importamos el Router de Angular
import { filter } from 'rxjs/operators';                  // Importamos 'filter' para filtrar eventos
declare let gtag: Function;  // Declara la función gtag para que TypeScript la reconozca

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mr-yugen-web';

  constructor(private router: Router) {
    // Suscribirse a eventos de finalización de navegación
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_view', {
            page_path: e.urlAfterRedirects,
            page_title: document.title,
            page_location: window.location.href, // <- recomendado por Google
          });
        }
      });
    }
}

