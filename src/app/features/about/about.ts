import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <!-- ==========================================
         HERO A PANTALLA COMPLETA (100dvh)
         ========================================== -->
    <section class="relative w-full h-[100dvh] flex flex-col justify-center overflow-hidden pt-[72px]">

      <!-- FOTOGRAFÍA DE FONDO (Con superposición oscura y retícula unificada) -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop"
             alt="Equipo técnico en obra" class="w-full h-full object-cover object-center mix-blend-luminosity opacity-40" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-[#0B192C]/60"></div>
        <!-- Degradado inferior corregido para mantener la línea de diseño oscura -->
        <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B192C] to-transparent"></div>
      </div>

      <!-- Retícula técnica sutil -->
      <div class="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-30"
           style="background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 6rem 6rem;">
      </div>

      <!-- Contenedor central -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full animate-fade-in -mt-10">
        <div class="inline-flex items-center gap-3 mb-6 md:mb-8 px-4 py-2 border border-slate-600/50 bg-[#0B192C]/50 backdrop-blur-sm rounded-sm">
          <div class="w-1.5 h-1.5 rounded-full bg-[#5C968D] animate-pulse"></div>
          <span class="font-inter text-[#B8C3D2] text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase">Nuestra Identidad</span>
        </div>

        <div class="max-w-4xl">
          <h1 class="font-jakarta text-[40px] sm:text-[56px] md:text-[84px] font-medium leading-[1.05] tracking-tighter mb-6 md:mb-8 text-white">
            <span class="block text-[#F5F6F8]">Capacidad técnica</span>
            <span class="block text-[#94A3B8] font-light mt-1 md:mt-2">y solvencia en obra.</span>
          </h1>
          <p class="text-slate-300 font-inter text-sm md:text-xl leading-relaxed font-light max-w-2xl">
            No solo ejecutamos proyectos; construimos confianza a través del rigor técnico, la puntualidad milimétrica y la excelencia en cada partida. Conozca al equipo detrás de los acabados más exigentes.
          </p>
        </div>
      </div>

      <!-- INDICADOR DE SCROLL ANIMADO (Corrección milimétrica de centrado visual aplicada) -->
      <div class="absolute bottom-8 md:bottom-12 inset-x-0 z-20 flex flex-col items-center gap-2 animate-fade-in delay-500 opacity-0 pointer-events-none" style="animation-fill-mode: forwards;">
        <!-- margin-right: -0.3em cancela el espacio asimétrico del tracking -->
        <span class="font-inter text-[8px] md:text-[9px] text-[#B8C3D2] uppercase tracking-[0.3em] font-medium" style="margin-right: -0.3em;">Descubrir</span>
        <div class="w-5 h-8 md:w-6 md:h-10 border border-[#B8C3D2]/50 rounded-full flex justify-center pt-2">
          <div class="w-1.5 h-1.5 bg-[#5C968D] rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         SECCIÓN: EL MANIFIESTO (Diseño Editorial B2B)
         ========================================== -->
    <section class="py-20 md:py-32 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          <!-- Columna Izquierda: Texto Formateado Editorial -->
          <div #revealElement class="lg:col-span-5 flex flex-col gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div>
              <h2 class="font-jakarta text-3xl md:text-4xl lg:text-[42px] font-medium text-[#0B192C] leading-[1.15] tracking-tight mb-8">
                Líderes en soluciones integrales para la <span class="text-[#005691] italic font-medium">reconstrucción y acondicionamiento</span>.
              </h2>

              <div class="flex flex-col gap-6 text-slate-500 font-inter text-sm md:text-base leading-relaxed font-light">
                <p>
                  <span class="font-medium text-[#1E3E62]">Entornos Funcionales Reconstrucción & Acabados</span> es una empresa especializada en una amplia gama de servicios constructivos. Abarcamos desde trabajos de alta precisión en pintura y acabados arquitectónicos, hasta sistemas avanzados de electricidad y climatización (HVAC).
                </p>

                <!-- Bloque Destacado de Color -->
                <div class="bg-[#EBF3FA] border-l-4 border-[#005691] p-5 md:p-6 rounded-r-sm my-2">
                  <p class="text-[#0B192C] font-medium text-[15px] md:text-lg leading-snug">
                    "En cada proyecto, nos enfocamos en transformar y optimizar espacios para que sean funcionales, cómodos y estéticamente impecables."
                  </p>
                </div>

                <p>
                  Ya sea en proyectos residenciales de lujo, desarrollos comerciales o plantas industriales, nuestro equipo de ingenieros está comprometido a superar las expectativas técnicas, ofreciendo soluciones a medida que perduran en el tiempo.
                </p>
              </div>
            </div>

            <!-- Stats Rápidas Estilizadas -->
            <div class="grid grid-cols-2 gap-4 mt-2">
              <div class="flex items-center gap-4 bg-slate-50 p-4 rounded-sm border border-slate-100">
                <div class="w-10 h-10 rounded-full bg-[#005691]/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#005691" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <span class="block font-inter text-[9px] text-slate-400 uppercase tracking-widest font-medium">Historial</span>
                  <span class="block font-mono text-sm text-[#0B192C] font-medium">100% Cumplimiento</span>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-slate-50 p-4 rounded-sm border border-slate-100">
                <div class="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 7V2"/><path d="M15 7V2"/><path d="M12 7v5"/><path d="M22 12h-5"/><path d="M7 12H2"/><path d="m19 5-3 3"/><path d="m5 19 3-3"/><path d="m5 5 3 3"/><path d="m19 19-3-3"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <div>
                  <span class="block font-inter text-[9px] text-slate-400 uppercase tracking-widest font-medium">Precisión</span>
                  <span class="block font-mono text-sm text-[#0B192C] font-medium">Cero Retrabajos</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Composición Fotográfica Dinámica -->
          <div #revealElement class="lg:col-span-7 relative w-full h-[500px] md:h-[600px] opacity-0 translate-y-12 transition-all duration-[1200ms] delay-200 ease-out mt-10 lg:mt-0">

            <!-- Imagen Principal -->
            <div class="absolute top-0 right-0 w-[85%] h-[85%] bg-slate-100 overflow-hidden rounded-sm shadow-xl border border-slate-100">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                   alt="Ejecución de obra" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>

            <!-- Imagen Secundaria Superpuesta -->
            <div class="absolute bottom-4 left-0 w-[45%] h-[50%] p-2 bg-white rounded-sm shadow-2xl z-10 border border-slate-100">
              <div class="w-full h-full overflow-hidden bg-slate-100 rounded-sm">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
                     alt="Supervisión de Acabados" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>

            <!-- Tarjeta Flotante Glassmorphism -->
            <div class="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-[#005691]/95 backdrop-blur-md text-white p-5 md:p-6 rounded-sm shadow-2xl z-20 border border-[#005691]/50 max-w-[200px] hidden sm:block">
              <span class="font-mono text-4xl font-medium block mb-1">+12</span>
              <span class="font-jakarta text-[11px] uppercase tracking-widest font-medium block leading-tight text-[#EBF3FA]">
                Años de experiencia construyendo el futuro.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================
         SECCIÓN: PILARES (Bento Box Grid)
         ========================================== -->
    <section class="py-20 md:py-32 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <!-- Retícula de fondo para darle textura -->
      <div class="absolute inset-0 z-0 pointer-events-none opacity-50"
           style="background-image: linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px); background-size: 32px 32px;"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="font-jakarta text-3xl md:text-[42px] font-medium text-[#0B192C] leading-tight tracking-tight mb-4">Nuestros Pilares</h2>
          <p class="font-inter text-slate-500 font-light text-sm md:text-base">La base sobre la que edificamos la confianza de nuestros clientes corporativos y residenciales.</p>
        </div>

        <!-- Diseño Bento Box Asimétrico y Colorido -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

          <!-- BOX 1: MISIÓN -->
          <article #revealElement class="md:col-span-7 group bg-white border border-slate-200 rounded-sm p-8 md:p-10 hover:border-[#005691]/40 hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8 ease-out flex flex-col h-full relative overflow-hidden">
            <div class="flex items-center justify-between mb-8 relative z-10">
              <span class="font-mono text-xs font-medium text-[#005691] bg-[#EBF3FA] px-2.5 py-1 rounded-sm border border-[#005691]/10">01</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-300 group-hover:text-[#005691] transition-colors"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>

            <h3 class="font-jakarta text-2xl md:text-3xl font-medium text-[#0B192C] mb-4 tracking-tight relative z-10">Nuestra Misión</h3>

            <p class="font-inter text-slate-500 text-sm md:text-base leading-relaxed font-light mt-auto relative z-10 max-w-lg">
              Ofrecer servicios de calidad superior en mantenimiento, reconstrucción y acabados para crear espacios funcionales, seguros y estéticamente armoniosos. Garantizamos la tranquilidad técnica de nuestros clientes a través de procedimientos rigurosos.
            </p>

            <div class="absolute bottom-0 right-0 w-32 h-32 bg-[#EBF3FA] rounded-tl-full opacity-50 transform translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          </article>

          <!-- BOX 2: VISIÓN -->
          <article #revealElement class="md:col-span-5 group bg-[#0B192C] border border-[#1E3E62] rounded-sm p-8 md:p-10 hover:shadow-2xl hover:shadow-[#0B192C]/20 transition-all duration-500 opacity-0 translate-y-8 delay-100 ease-out flex flex-col h-full relative overflow-hidden">
            <div class="absolute top-0 right-0 w-48 h-48 bg-[#0D9488] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

            <div class="flex items-center justify-between mb-8 relative z-10">
              <span class="font-mono text-xs font-medium text-[#B8C3D2] border border-[#1E3E62] px-2.5 py-1 rounded-sm bg-[#0B192C]">02</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 group-hover:text-[#0D9488] transition-colors"><path d="M2 12h10"/><path d="M9 4v16"/><path d="m3 9 3 3-3 3"/></svg>
            </div>

            <h3 class="font-jakarta text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight relative z-10">Nuestra Visión</h3>

            <p class="font-inter text-slate-400 text-sm md:text-base leading-relaxed font-light mt-auto relative z-10">
              Aspiramos a ser la empresa líder en servicios constructivos B2B del mercado, manteniendo un compromiso inquebrantable con la calidad constructiva y un enfoque total en la satisfacción del cliente.
            </p>
          </article>

          <!-- BOX 3: ENFOQUE -->
          <article #revealElement class="md:col-span-12 group relative w-full h-[280px] md:h-[320px] rounded-sm overflow-hidden border border-slate-200 opacity-0 translate-y-8 delay-200 ease-out">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                 alt="Enfoque de trabajo" class="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />

            <div class="absolute inset-0 bg-gradient-to-t from-[#0B192C]/95 via-[#0B192C]/40 to-transparent"></div>

            <div class="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-xs font-medium text-white border border-white/30 px-2.5 py-1 rounded-sm backdrop-blur-sm">03</span>
                <span class="font-jakarta text-[10px] uppercase tracking-widest font-medium text-[#94A3B8]">Nuestro Enfoque</span>
              </div>
              <h3 class="font-jakarta text-2xl md:text-3xl font-medium text-white max-w-2xl leading-tight">
                Integración de tecnología y supervisión in situ para garantizar obras sin retrasos ni observaciones.
              </h3>
            </div>
          </article>

        </div>

      </div>
    </section>

    <!-- ==========================================
         CALL TO ACTION INTERACTIVO
         ========================================== -->
    <section class="bg-white py-20 md:py-24 relative overflow-hidden border-t border-slate-200">
      <div class="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <h2 class="font-jakarta text-[32px] md:text-[48px] font-medium leading-[1.05] tracking-tighter text-[#0B192C] mb-6">
          ¿Listo para iniciar su próximo proyecto?
        </h2>
        <p class="text-sm md:text-lg text-slate-500 font-inter mb-8 md:mb-10 leading-relaxed font-light max-w-2xl">
          Ponga su obra en manos de especialistas. Un ingeniero residente evaluará sus requerimientos y le entregará una propuesta técnica detallada.
        </p>
        <div class="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
          <a href="/contacto" class="w-full sm:w-auto bg-[#005691] text-white px-8 py-4 rounded-sm text-[13px] font-jakarta font-medium uppercase tracking-[0.1em] hover:bg-[#1E3E62] transition-colors text-center">
            Solicitar Estimación
          </a>
          <a href="/proyectos" class="w-full sm:w-auto bg-transparent border border-slate-300 text-slate-600 px-8 py-4 rounded-sm text-[13px] font-jakarta font-medium uppercase tracking-[0.1em] hover:bg-slate-50 hover:border-slate-400 transition-colors text-center">
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    @keyframes scrollDown {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(10px); opacity: 0; }
    }
    .animate-scroll-down {
      animation: scrollDown 1.5s infinite;
    }
  `]
})
export class About implements AfterViewInit {
  @ViewChildren('revealElement') revealElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    setTimeout(() => {
      this.revealElements.forEach(el => observer.observe(el.nativeElement));
    }, 50);
  }
}
