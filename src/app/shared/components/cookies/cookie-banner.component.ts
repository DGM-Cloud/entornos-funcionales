import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="showBanner"
         class="fixed bottom-0 left-0 w-full bg-[#0B121D]/95 backdrop-blur-md border-t border-slate-800 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] animate-fade-in-up">
      <div class="max-w-7xl mx-auto px-5 md:px-6 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4">

        <!-- Texto Legal -->
        <div class="flex-1 text-center md:text-left">
          <p class="font-inter text-xs md:text-[13px] text-[#B8C3D2] font-light leading-relaxed">
            Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación, analizar el tráfico y optimizar nuestros servicios técnicos.
            Al continuar navegando, consideramos que acepta su uso. Puede obtener más información en nuestra
            <a routerLink="/privacidad" class="text-[#5C968D] hover:text-[#F5F6F8] font-medium underline underline-offset-2 transition-colors">Política de Privacidad y Cookies</a>.
          </p>
        </div>

        <!-- Botones de Acción -->
        <div class="flex items-center gap-3 shrink-0">
          <button (click)="acceptCookies()"
                  class="bg-[#1E3E62] hover:bg-[#335092] text-white font-inter text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-sm transition-colors">
            Aceptar
          </button>
        </div>

      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `]
})
export class CookieBannerComponent implements OnInit {
  showBanner: boolean = false;

  ngOnInit(): void {
    // Verificamos si el usuario ya aceptó las cookies previamente
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      this.showBanner = true;
    }
  }

  acceptCookies(): void {
    // Guardamos la confirmación en el navegador y ocultamos el banner
    localStorage.setItem('cookiesAccepted', 'true');
    this.showBanner = false;
  }
}
