import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { FloatingWhatsapp } from './shared/components/floating-whatsapp/floating-whatsapp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, FloatingWhatsapp],
  template: `
    <!-- El Header será sticky y se mantendrá arriba -->
    <app-header />

    <!-- Aquí se inyectan las páginas (Home, Proyectos, etc.) dinámicamente -->
    <main class="min-h-screen pt-[72px]">
      <router-outlet />
    </main>

    <!-- Footer institucional al final -->
    <app-footer />

    <!-- Botón flotante de WhatsApp global -->
    <app-floating-whatsapp />
  `
})
export class App {
  title = 'entornos-funcionales';
}
