// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'dark-mode';

  /** Comprueba si está activado el modo oscuro en localStorage */
  isDark(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }

  /** Cambia entre modo claro y oscuro y lo guarda */
  toggle(): boolean {
    const newValue = !this.isDark();
    localStorage.setItem(this.storageKey, newValue.toString());
    return newValue;
  }
}
