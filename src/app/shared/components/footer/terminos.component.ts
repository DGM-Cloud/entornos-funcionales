import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="w-full bg-white pt-[120px] pb-24 md:pt-[160px] md:pb-32">
      <div class="max-w-4xl mx-auto px-5 md:px-6">

        <!-- Header de la página -->
        <div class="mb-16 md:mb-24">
          <div class="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-slate-200 bg-[#F8FAFC] rounded-sm">
            <div class="w-1.5 h-1.5 rounded-full bg-[#5C968D]"></div>
            <span class="font-inter text-[#101827] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Documento Legal</span>
          </div>
          <h1 class="font-inter text-[36px] md:text-[56px] font-medium leading-[1.1] tracking-tighter text-[#101827] mb-6">
            Términos y Condiciones.
          </h1>
          <p class="font-inter text-slate-500 text-sm tracking-widest uppercase">Última actualización: Octubre 2026</p>
        </div>

        <!-- Contenido Legal -->
        <div class="font-inter text-slate-600 font-light leading-relaxed space-y-10">

          <div>
            <h2 class="font-jakarta text-xl font-medium text-[#101827] mb-4">1. Naturaleza de la Plataforma</h2>
            <p>
              El presente sitio web opera como un portafolio institucional e informativo de los servicios de ingeniería, remodelación y acabados arquitectónicos prestados por <strong>Entornos Funcionales</strong>. La navegación por esta plataforma atribuye la condición de Usuario e implica la aceptación íntegra de estas disposiciones.
            </p>
          </div>

          <div>
            <h2 class="font-jakarta text-xl font-medium text-[#101827] mb-4">2. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos de esta web, incluyendo pero no limitándose a: diseño estructural, fotografías de proyectos, logotipos, textos comerciales y código fuente, son propiedad exclusiva de Entornos Funcionales y se encuentran protegidos por la legislación peruana e internacional sobre propiedad intelectual. Queda estrictamente prohibida su reproducción, distribución o modificación sin autorización por escrito.
            </p>
          </div>

          <div>
            <h2 class="font-jakarta text-xl font-medium text-[#101827] mb-4">3. Limitación de Responsabilidad y Presupuestos</h2>
            <p>
              La información contenida en esta plataforma tiene carácter referencial. Las métricas, servicios y detalles técnicos expuestos no constituyen una oferta comercial jurídicamente vinculante. Todo requerimiento de servicio requerirá una evaluación técnica presencial o documentada, la cual resultará en una cotización y/o contrato formal que regirá los términos definitivos de ejecución de obra.
            </p>
          </div>

          <div>
            <h2 class="font-jakarta text-xl font-medium text-[#101827] mb-4">4. Legislación Aplicable</h2>
            <p>
              Los presentes Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia derivada del uso de este sitio web será sometida a la jurisdicción de los jueces y tribunales del Distrito Judicial de Lima.
            </p>
          </div>

        </div>

        <!-- Botón de retorno -->
        <div class="mt-16 pt-8 border-t border-slate-200">
          <a routerLink="/" class="inline-flex items-center gap-2 font-jakarta font-bold text-[11px] text-[#101827] hover:text-[#5C968D] uppercase tracking-[0.15em] transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-x-1 transition-transform rotate-180"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            Volver al inicio
          </a>
        </div>

      </div>
    </section>
  `
})
export class TerminosComponent {}
