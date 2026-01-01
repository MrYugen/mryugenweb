import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para pipes si los usaras, aunque aqui no hacen falta

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Si no tienes css específico, puedes quitar esta línea o dejarlo vacío
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}