import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',  // vuelve siempre al top
        anchorScrolling: 'enabled'              // respeta fragmentos (#contact)
        // ← ya no ponemos scrollOffset
      })
    )
  ]
};
