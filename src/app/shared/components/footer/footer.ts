import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#0B121D] pt-20 pb-8 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-5 md:px-6">

        <!-- Grid Superior del Footer -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <!-- Branding & Empresa (4 columnas) -->
          <div class="md:col-span-12 lg:col-span-4 flex flex-col items-start">

            <!-- LOGO OFICIAL MONOCROMÁTICO (Tamaño Aumentado) -->
            <a routerLink="/" class="flex items-center cursor-pointer mb-8">
              <!-- Se cambió h-10 md:h-12 a h-14 md:h-16 -->
              <img src="https://www.entornosfuncionales.com/portal/wp-content/uploads/2024/11/Group-1-4.png"
                   alt="Entornos Funcionales"
                   class="h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-90 transition-opacity hover:opacity-100 duration-300" />
            </a>

            <p class="font-inter text-sm text-[#B8C3D2] font-light leading-relaxed max-w-sm mb-6">
              Firma especializada en ejecución de partidas arquitectónicas e instalaciones técnicas de alta complejidad para el sector corporativo e industrial.
            </p>
            <div class="inline-flex items-center gap-2 border border-slate-700/50 bg-[#101827] px-3 py-1.5 rounded-sm">
              <div class="w-1.5 h-1.5 rounded-full bg-[#5C968D]"></div>
              <span class="font-inter text-[9px] text-slate-400 font-bold tracking-widest uppercase">Operaciones Activas</span>
            </div>
          </div>

          <!-- Navegación Institucional (2 columnas) -->
          <div class="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 class="font-inter text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Empresa</h4>
            <nav class="flex flex-col gap-4">
              <a routerLink="/" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Inicio</a>
              <a routerLink="/nosotros" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Nuestra Capacidad</a>
              <a routerLink="/proyectos" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Portafolio Técnico</a>
              <a routerLink="/contacto" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Validación y Contacto</a>
            </nav>
          </div>

          <!-- Especialidades (3 columnas) -->
          <div class="md:col-span-4 lg:col-span-2">
            <h4 class="font-inter text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Especialidades</h4>
            <nav class="flex flex-col gap-4">
              <a routerLink="/servicios" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Drywall y Acústica</a>
              <a routerLink="/servicios" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Acabados y Pintura</a>
              <a routerLink="/servicios" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Redes Hidrosanitarias</a>
              <a routerLink="/servicios" class="font-inter text-[13px] text-[#B8C3D2] hover:text-[#F5F6F8] transition-colors">Redes Eléctricas</a>
            </nav>
          </div>

          <!-- Oficina Técnica (3 columnas) -->
          <div class="md:col-span-4 lg:col-span-3">
            <h4 class="font-inter text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Oficina Técnica</h4>
            <div class="flex flex-col gap-4 font-inter text-[13px] text-[#B8C3D2]">
              <p class="font-light leading-relaxed">Lima<br>Perú</p>
              <a href="mailto:cotizaciones@entornosfuncionales.pe" class="hover:text-[#F5F6F8] transition-colors">cotizaciones&#64;entornosfuncionales.pe</a>
              <a href="tel:+51913460898" class="hover:text-[#F5F6F8] transition-colors">+51 913 460 898</a>
            </div>
          </div>

        </div>

        <!-- Copyright / Legal -->
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-inter text-[11px] text-slate-500 font-light">
            &copy; {{ currentYear }} Entornos Funcionales. Todos los derechos reservados.
          </p>
          <div class="flex gap-6">
            <a href="#" class="font-inter text-[9px] uppercase tracking-widest text-slate-500 hover:text-[#F5F6F8] transition-colors font-bold">Términos</a>
            <a href="#" class="font-inter text-[9px] uppercase tracking-widest text-slate-500 hover:text-[#F5F6F8] transition-colors font-bold">Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class Footer {
  currentYear = new Date().getFullYear();
}
