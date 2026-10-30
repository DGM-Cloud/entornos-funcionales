import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // IMPORTANTE: Agregado el import

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink], // IMPORTANTE: Declarado en los imports
  template: `
    <!-- ==========================================
1. HERO SECTION (100vh Puro, Diseño Home B2B)
         ========================================== -->
    <section class="relative w-full h-screen flex flex-col justify-center bg-[#101827] overflow-hidden pt-[72px]">

      <!-- FOTOGRAFÍA PRINCIPAL -->
      <div class="absolute inset-0 z-0">
        <img src="https://res.cloudinary.com/w775d4fq/image/upload/v1793316075/IMG-20240917-WA0079_-_copia_-_copia.jpg"
             alt="Especialidades Arquitectónicas"
             class="w-full h-full object-cover opacity-70 -scale-x-100" />

        <div class="absolute inset-0 bg-gradient-to-r from-[#101827] via-[#101827]/85 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#101827] to-transparent"></div>
      </div>

      <!-- Retícula del Home -->
      <div class="absolute inset-0 z-0 pointer-events-none mix-blend-overlay"
           style="background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 6rem 6rem;">
      </div>

      <!-- Contenedor del texto: Animado nativamente al cargar la página -->
      <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full flex flex-col items-start -mt-10 animate-hero-fade-in opacity-0" style="animation-fill-mode: forwards;">
        <div class="w-full max-w-4xl flex flex-col items-start">

          <div class="inline-flex items-center gap-3 mb-6 md:mb-8 px-4 py-2 border border-slate-700/50 bg-[#101827]/80 rounded-sm">
            <div class="w-1.5 h-1.5 rounded-full bg-[#5C968D]"></div>
            <span class="font-inter text-[#B8C3D2] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Catálogo Técnico
            </span>
          </div>

          <h1 class="font-inter text-[38px] sm:text-[44px] md:text-[84px] leading-[1.1] md:leading-[1.05] tracking-tighter mb-6 md:mb-8 w-full">
            <span class="block font-medium text-[#F5F6F8]">
              Especialidades
            </span>
            <span class="block font-light text-[#B8C3D2] mt-1 md:mt-2">
              en reconstrucción.
            </span>
          </h1>

          <p class="text-base md:text-xl font-inter text-[#B8C3D2] mb-10 md:mb-12 max-w-xl leading-relaxed font-light">
            Un desglose detallado de nuestras partidas de obra. Explore los materiales certificados, protocolos de calidad y plazos típicos que garantizan el éxito de cada intervención.
          </p>

          <div class="flex flex-wrap sm:flex-nowrap gap-4">
            <!-- CORRECCIÓN A routerLink="/contacto" -->
            <a routerLink="/contacto" class="bg-[#F5F6F8] text-[#101827] px-8 py-3.5 md:py-4 rounded-sm text-[13px] font-jakarta font-bold uppercase tracking-[0.1em] hover:bg-white transition-colors text-center whitespace-nowrap">
              Solicitar TDR
            </a>
          </div>

        </div>
      </div>

      <!-- INDICADOR DE SCROLL ANIMADO (Corrección milimétrica de centrado visual) -->
      <div class="absolute bottom-8 md:bottom-12 inset-x-0 z-20 flex flex-col items-center gap-2 animate-hero-fade-in opacity-0 pointer-events-none" style="animation-fill-mode: forwards; animation-delay: 0.5s;">
        <!-- margin-right: -0.3em cancela el espacio asimétrico del tracking -->
        <span class="font-inter text-[8px] md:text-[9px] text-[#B8C3D2] uppercase tracking-[0.3em] font-medium" style="margin-right: -0.3em;">Explorar Servicios</span>
        <div class="w-5 h-8 md:w-6 md:h-10 border border-[#B8C3D2]/50 rounded-full flex justify-center pt-2">
          <div class="w-1.5 h-1.5 bg-[#5C968D] rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         2. CATÁLOGO TÉCNICO (Dirección de Arte Editorial)
         ========================================== -->
    <div class="w-full bg-white">

      <!-- SERVICIO 01: SERVICIOS GENERALES (Layout Directorio Analítico) -->
      <section class="py-24 md:py-32 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-5 md:px-6">

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <!-- Columna Izquierda: Identificador y Contexto -->
            <div #revealElement class="lg:col-span-5 flex flex-col opacity-0 translate-y-12 transition-all duration-1000 ease-out">
              <span class="font-mono text-[120px] md:text-[180px] leading-none text-slate-100 font-bold select-none -ml-4 tracking-tighter">01</span>
              <div class="pl-4 -mt-16 md:-mt-24 relative z-10">
                <h2 class="font-jakarta text-[36px] md:text-[48px] font-medium leading-[1.05] tracking-tight text-[#0B192C] mb-6">
                  Servicios generales
                </h2>
                <div class="w-12 h-[2px] bg-[#5C968D] mb-8"></div>
                <p class="font-inter text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8 max-w-md">
                  Somos una empresa conformada por profesionales comprometidos con brindar servicios de alta calidad para resolver los requerimientos del hogar y de empresas privadas o estatales de manera eficiente.
                </p>
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                     alt="Operativa Técnica"
                     class="w-full max-w-md h-48 object-cover rounded-sm border border-slate-200 grayscale-[20%]" loading="lazy"/>
              </div>
            </div>

            <!-- Columna Derecha: Arquitectura de Información (Agrupación Semántica) -->
            <div #revealElement class="lg:col-span-7 flex flex-col justify-center opacity-0 translate-y-12 transition-all duration-1000 delay-150 ease-out">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">

                <!-- Grupo 1 -->
                <div class="group">
                  <span class="font-mono text-xs text-[#5C968D] uppercase tracking-widest font-bold mb-4 block">Estructuras & Acabados</span>
                  <ul class="space-y-3 border-l-2 border-slate-100 pl-4 group-hover:border-[#5C968D] transition-colors">
                    <li class="font-inter text-[15px] text-[#0B192C] font-medium">Instalación de drywall</li>
                    <li class="font-inter text-[15px] text-slate-600 font-light">Acabados de interiores</li>
                    <li class="font-inter text-[15px] text-slate-600 font-light">Pintura</li>
                  </ul>
                </div>

                <!-- Grupo 2 -->
                <div class="group">
                  <span class="font-mono text-xs text-[#5C968D] uppercase tracking-widest font-bold mb-4 block">Instalaciones Técnicas</span>
                  <ul class="space-y-3 border-l-2 border-slate-100 pl-4 group-hover:border-[#5C968D] transition-colors">
                    <li class="font-inter text-[15px] text-[#0B192C] font-medium">Electricidad industrial</li>
                    <li class="font-inter text-[15px] text-slate-600 font-light">Gasfitería</li>
                  </ul>
                </div>

                <!-- Grupo 3 -->
                <div class="group">
                  <span class="font-mono text-xs text-[#5C968D] uppercase tracking-widest font-bold mb-4 block">Mobiliario & Madera</span>
                  <ul class="space-y-3 border-l-2 border-slate-100 pl-4 group-hover:border-[#5C968D] transition-colors">
                    <li class="font-inter text-[15px] text-[#0B192C] font-medium">Instalación de muebles en melamina</li>
                    <li class="font-inter text-[15px] text-slate-600 font-light">Carpintería</li>
                    <li class="font-inter text-[15px] text-slate-600 font-light">Ebanistería</li>
                  </ul>
                </div>

                <!-- Grupo 4 -->
                <div class="group">
                  <span class="font-mono text-xs text-[#5C968D] uppercase tracking-widest font-bold mb-4 block">Cerramientos & Estructura</span>
                  <ul class="space-y-3 border-l-2 border-slate-100 pl-4 group-hover:border-[#5C968D] transition-colors">
                    <li class="font-inter text-[15px] text-[#0B192C] font-medium">Soldadura</li>
                    <li class="font-inter text-[15px] text-slate-600 font-light">Cerrajería</li>
                    <li class="font-inter text-[15px] text-slate-600 font-light">Vidriería</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- SERVICIO 02: AIRE ACONDICIONADO Y HVAC (Layout Dual Climático) -->
      <section class="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-5 md:px-6">

          <div #revealElement class="flex flex-col lg:flex-row bg-white rounded-sm border border-slate-200 shadow-xl overflow-hidden opacity-0 translate-y-12 transition-all duration-1000 ease-out">

            <!-- Bloque Visual HVAC -->
            <div class="w-full lg:w-5/12 relative min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
                   alt="Sistemas HVAC"
                   class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <!-- Capa técnica -->
              <div class="absolute inset-0 bg-[#1E3E62]/80 mix-blend-multiply"></div>

              <div class="absolute inset-0 p-10 flex flex-col justify-between">
                <span class="font-mono text-white/50 text-xs tracking-widest border border-white/20 w-fit px-3 py-1">SYS. HVAC</span>
                <div class="text-white">
                  <span class="font-mono text-[80px] leading-none font-bold opacity-20 block mb-2">02</span>
                  <h2 class="font-jakarta text-[32px] md:text-[40px] font-medium leading-[1.05] tracking-tight">
                    Aire Acondicionado <br>& HVAC
                  </h2>
                </div>
              </div>
            </div>

            <!-- Arquitectura de Contenido -->
            <div class="w-full lg:w-7/12 p-8 md:p-14 lg:p-16 flex flex-col justify-center">
              <p class="font-inter text-slate-600 text-base leading-relaxed font-light mb-12">
                Ofrecemos soluciones integrales de climatización y ventilación para asegurar el confort, la calidad del aire y la eficiencia térmica en aplicaciones residenciales, comerciales e industriales.
              </p>

              <!-- Diferenciación Solicitada: Comercialización vs Instalación -->
              <div class="flex flex-col gap-10">

                <div class="relative pl-8">
                  <div class="absolute left-0 top-1 w-3 h-3 border-2 border-[#5C968D] rounded-full"></div>
                  <div class="absolute left-[5px] top-5 w-[2px] h-full bg-slate-100"></div>
                  <h4 class="font-jakarta text-lg font-bold text-[#0B192C] mb-2">Suministro y Comercialización</h4>
                  <ul class="space-y-3 font-inter text-sm text-slate-600 font-light leading-relaxed">
                    <li><strong class="font-medium text-[#1E3E62]">Soluciones HVAC:</strong> Diseño, fabricación, representación, importación, exportación y comercialización de productos relacionados con calefacción, ventilación y refrigeración.</li>
                    <li><strong class="font-medium text-[#1E3E62]">Equipamiento Industrial:</strong> Suministro de equipos de refrigeración comercial e industrial.</li>
                    <li><strong class="font-medium text-[#1E3E62]">Compresores:</strong> Equipos y compresores de alta exigencia para diversas aplicaciones.</li>
                  </ul>
                </div>

                <div class="relative pl-8">
                  <div class="absolute left-0 top-1 w-3 h-3 bg-[#5C968D] rounded-full shadow-[0_0_0_4px_rgba(92,150,141,0.2)]"></div>
                  <h4 class="font-jakarta text-lg font-bold text-[#0B192C] mb-2">Instalación y Mantenimiento</h4>
                  <p class="font-inter text-sm text-slate-600 font-light leading-relaxed">
                    Ejecución técnica para el suministro, instalación, calibración y mantenimiento preventivo y correctivo de sistemas de aire acondicionado, calefacción y ventilación in situ.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SERVICIO 03: SISTEMAS CONTRA INCENDIOS (Layout Expediente/Ledger) -->
      <section class="py-24 md:py-32 bg-[#0B192C] relative overflow-hidden">
        <!-- Textura de fondo técnica -->
        <div class="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
             style="background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 4rem 4rem;"></div>

        <div class="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

          <div #revealElement class="flex flex-col lg:flex-row gap-16 opacity-0 translate-y-12 transition-all duration-1000 ease-out">

            <!-- Título Lateral -->
            <div class="w-full lg:w-1/4 flex flex-col">
              <span class="font-mono text-5xl text-[#1E3E62] font-bold mb-4">03</span>
              <h2 class="font-jakarta text-[32px] md:text-[40px] font-medium leading-[1.05] tracking-tighter text-white mb-6">
                Sistemas Contra Incendios
              </h2>
              <p class="font-inter text-slate-400 text-sm leading-relaxed font-light mb-8">
                Desarrollamos soluciones integrales para el diseño, instalación, mantenimiento y protección contra incendios en instalaciones y entornos que requieren sistemas de seguridad críticos.
              </p>
              <div class="hidden lg:block w-full h-[1px] bg-gradient-to-r from-[#5C968D] to-transparent mt-auto"></div>
            </div>

            <!-- Expediente de Especialidades (Tabla Semántica) -->
            <div class="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-l-0 lg:border-l border-[#1E3E62] lg:pl-12">

              <div class="group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-6 h-6 border border-[#5C968D] flex items-center justify-center text-[#5C968D] font-mono text-[9px]">A</div>
                  <h4 class="font-jakarta text-lg font-bold text-white">Ingeniería e Instalación</h4>
                </div>
                <ul class="space-y-3 font-inter text-sm text-slate-400 font-light">
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Realización de proyectos de ingeniería.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Diseño, instalación, mantenimiento y reparación de sistemas contra incendios.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Servicios integrales en sistemas de mangueras.</li>
                </ul>
              </div>

              <div class="group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-6 h-6 border border-[#5C968D] flex items-center justify-center text-[#5C968D] font-mono text-[9px]">B</div>
                  <h4 class="font-jakarta text-lg font-bold text-white">Detección y Alarma</h4>
                </div>
                <ul class="space-y-3 font-inter text-sm text-slate-400 font-light">
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Sensores y detectores de fuego, térmicos y de humo.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Fabricación, distribución y comercialización de sistemas de detección y alarmas.</li>
                </ul>
              </div>

              <div class="group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-6 h-6 border border-[#5C968D] flex items-center justify-center text-[#5C968D] font-mono text-[9px]">C</div>
                  <h4 class="font-jakarta text-lg font-bold text-white">Equipos de Protección</h4>
                </div>
                <ul class="space-y-3 font-inter text-sm text-slate-400 font-light">
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Extintores de agua, espuma, gases y polvo.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Sistemas de espuma con aire comprimido.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Equipos de extracción de precisión.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Puertas cortafuegos y señalización industrial.</li>
                </ul>
              </div>

              <div class="group">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-6 h-6 border border-[#5C968D] flex items-center justify-center text-[#5C968D] font-mono text-[9px]">D</div>
                  <h4 class="font-jakarta text-lg font-bold text-white">Mantenimiento y Certificación</h4>
                </div>
                <ul class="space-y-3 font-inter text-sm text-slate-400 font-light">
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Soluciones de protección activa y pasiva.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Inspecciones y revisión/recarga de extintores.</li>
                  <li class="flex items-start gap-2"><span class="text-[#5C968D] mt-0.5">›</span> Emisión de certificados de protección contra incendios.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- SERVICIO 04: ELECTRICIDAD INDUSTRIAL (Layout Blueprint/Infografía) -->
      <section class="py-24 md:py-32 bg-[#101827] relative overflow-hidden">
        <!-- Elementos gráficos inspirados en diagramas eléctricos -->
        <div class="absolute inset-0 pointer-events-none opacity-20">
          <div class="absolute top-20 left-10 w-px h-full bg-[#5C968D]"></div>
          <div class="absolute top-[30%] left-10 w-24 h-px bg-[#5C968D]"></div>
          <div class="absolute top-[30%] left-[136px] w-2 h-2 rounded-full border border-[#5C968D]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

          <div #revealElement class="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <span class="font-mono text-sm text-[#5C968D] uppercase tracking-widest mb-4 block border border-[#5C968D]/30 px-3 py-1 rounded-sm bg-[#5C968D]/10">Línea de Servicio 04</span>
            <h2 class="font-jakarta text-[36px] md:text-[52px] font-medium leading-[1.05] tracking-tighter text-white mb-6">
              Electricidad Industrial
            </h2>
            <p class="font-inter text-slate-400 text-base md:text-lg leading-relaxed font-light">
              Contamos con capacidad técnica y administrativa para ofrecer soluciones especializadas en el montaje, desarrollo y certificación de proyectos del sector eléctrico.
            </p>
          </div>

          <div #revealElement class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 translate-y-12 transition-all duration-1000 delay-150 ease-out">

            <!-- Card 1 -->
            <div class="bg-white/5 border border-[#1E3E62] p-8 rounded-sm hover:border-[#5C968D] hover:bg-white/10 transition-all duration-300 group cursor-default relative overflow-hidden">
              <div class="absolute top-0 right-0 w-16 h-16 bg-[#5C968D] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
              <span class="block font-mono text-[10px] text-[#5C968D] mb-4">04.1 // TÉCNICA</span>
              <h4 class="font-jakarta text-xl font-bold text-white mb-4">Proyectos Eléctricos</h4>
              <p class="font-inter text-sm text-slate-400 font-light leading-relaxed">
                Diseño, implementación y mantenimiento integral de proyectos de ingeniería eléctrica a gran escala.
              </p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white/5 border border-[#1E3E62] p-8 rounded-sm hover:border-[#5C968D] hover:bg-white/10 transition-all duration-300 group cursor-default relative overflow-hidden">
              <div class="absolute top-0 right-0 w-16 h-16 bg-[#5C968D] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
              <span class="block font-mono text-[10px] text-[#5C968D] mb-4">04.2 // SOSTENIBILIDAD</span>
              <h4 class="font-jakarta text-xl font-bold text-white mb-4">Eficiencia Energética</h4>
              <p class="font-inter text-sm text-slate-400 font-light leading-relaxed">
                Diseño e implementación de soluciones de eficiencia energética, estudios y evaluación de la calidad de la energía.
              </p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white/5 border border-[#1E3E62] p-8 rounded-sm hover:border-[#5C968D] hover:bg-white/10 transition-all duration-300 group cursor-default relative overflow-hidden">
              <div class="absolute top-0 right-0 w-16 h-16 bg-[#5C968D] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
              <span class="block font-mono text-[10px] text-[#5C968D] mb-4">04.3 // LEGAL</span>
              <h4 class="font-jakarta text-xl font-bold text-white mb-4">Normativa INDECI</h4>
              <p class="font-inter text-sm text-slate-400 font-light leading-relaxed">
                Ejecución técnica y levantamiento de observaciones estructurales y eléctricas para inspecciones de INDECI.
              </p>
            </div>

            <!-- Card 4 -->
            <div class="bg-white/5 border border-[#1E3E62] p-8 rounded-sm hover:border-[#5C968D] hover:bg-white/10 transition-all duration-300 group cursor-default relative overflow-hidden">
              <div class="absolute top-0 right-0 w-16 h-16 bg-[#5C968D] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
              <span class="block font-mono text-[10px] text-[#5C968D] mb-4">04.4 // FABRICACIÓN</span>
              <h4 class="font-jakarta text-xl font-bold text-white mb-4">Tableros Eléctricos</h4>
              <p class="font-inter text-sm text-slate-400 font-light leading-relaxed">
                Fabricación, estructuración y montaje en obra de tableros eléctricos de distribución certificados.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>

    <!-- ==========================================
         CALL TO ACTION PRE-FOOTER
         ========================================== -->
    <section class="bg-white py-20 md:py-24 relative overflow-hidden border-t border-slate-200">
      <div class="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <h2 class="font-jakarta text-[32px] md:text-[48px] font-medium leading-[1.05] tracking-tighter text-[#101827] mb-6">
          Evaluemos su próximo proyecto.
        </h2>
        <p class="text-sm md:text-lg text-slate-500 font-inter mb-8 md:mb-10 leading-relaxed font-light max-w-2xl">
          Nuestra capacidad técnica está a disposición de su empresa. Un ingeniero evaluará sus requerimientos y le entregará una propuesta alineada a sus objetivos.
        </p>
        <div class="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
          <!-- CORRECCIÓN A routerLink="/contacto" -->
          <a routerLink="/contacto" class="w-full sm:w-auto bg-[#101827] text-white px-8 py-3.5 md:py-4 rounded-sm text-[13px] font-jakarta font-bold uppercase tracking-[0.1em] hover:bg-[#1E3E62] transition-colors text-center whitespace-nowrap">
            Solicitar Información
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes heroFadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-hero-fade-in {
      animation: heroFadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
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
export class Services implements AfterViewInit {
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
          entry.target.classList.remove('opacity-0', 'translate-y-12', 'translate-y-16');
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
