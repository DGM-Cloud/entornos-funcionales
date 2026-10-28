import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router'; // IMPORTANTE: Agregado el import
import { BeforeAfterSlider } from '../../shared/components/before-after-slider/before-after-slider';

type CategoriaProyecto = 'todos' | 'corporativo' | 'comercial' | 'industrial' | 'residencial';

interface Proyecto {
  id: string;
  codigo: string;
  categoria: Exclude<CategoriaProyecto, 'todos'>;
  titulo: string;
  cliente: string;
  ubicacion: string;
  metraje: string;
  plazo: string;
  descripcion: string;
  imagen: string;
  galeria?: string[];
  partidas: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BeforeAfterSlider, RouterLink], // IMPORTANTE: Agregado RouterLink a los imports
  template: `
    <!-- ==========================================
         HERO A PANTALLA COMPLETA
         ========================================== -->
    <section class="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-[104px] pb-16">

      <!-- FOTOGRAFÍA DE FONDO -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
             alt="Portafolio Arquitectónico"
             class="w-full h-full object-cover object-right" />

        <div class="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/85 to-[#0B192C]/20"></div>
        <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B192C] to-transparent"></div>
      </div>

      <!-- Retícula técnica sutil -->
      <div class="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-30"
           style="background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 6rem 6rem;">
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full animate-fade-in my-auto">
        <div class="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-slate-600/50 bg-[#0B192C]/50 backdrop-blur-sm rounded-sm">
          <div class="w-1.5 h-1.5 rounded-full bg-[#5C968D] animate-pulse"></div>
          <span class="font-inter text-[#B8C3D2] text-[10px] font-bold tracking-[0.2em] uppercase">Expedientes de Obra</span>
        </div>

        <div class="max-w-3xl">
          <h1 class="font-jakarta text-[56px] md:text-[84px] font-medium leading-[1.05] tracking-tighter mb-8 text-white">
            <span class="block text-[#F5F6F8]">Portafolio</span>
            <span class="block text-[#94A3B8] font-light mt-2">de Obras Ejecutadas.</span>
          </h1>
          <p class="text-slate-300 font-inter text-base md:text-xl leading-relaxed font-light max-w-2xl">
            Un visualizador interactivo de nuestra solvencia en terreno. Seleccione la especialidad a la izquierda e inspeccione las fichas técnicas. Haga clic en un proyecto para explorar la galería y el comparador Antes/Después.
          </p>
        </div>
      </div>

      <!-- INDICADOR DE SCROLL ANIMADO -->
      <div class="relative z-25 mx-auto flex flex-col items-center gap-3 animate-fade-in delay-500 opacity-0 mt-12 shrink-0" style="animation-fill-mode: forwards;">
        <span class="font-inter text-[9px] text-[#B8C3D2] uppercase tracking-[0.3em] font-medium">Explorar Proyectos</span>
        <div class="w-6 h-10 border border-[#B8C3D2]/50 rounded-full flex justify-center pt-2">
          <div class="w-1.5 h-1.5 bg-[#5C968D] rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>

    <!-- INTERFAZ ASIMÉTRICA: CATEGORÍAS & FICHAS -->
    <section class="bg-[#F8FAFC] border-t border-slate-200 relative min-h-[700px]">
      <div class="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <!-- PANEL IZQUIERDO: Navegación -->
          <div class="lg:col-span-3 lg:sticky lg:top-28 flex flex-col gap-8">
            <div class="border-l border-slate-200/80 pl-6 flex flex-col gap-6">
              <span class="font-jakarta text-[9px] font-medium text-slate-400 uppercase tracking-widest mb-2 block">Partidas y Especialidades</span>

              @for (cat of categorias; track cat.id) {
                <button (click)="filtrar(cat.id)"
                        class="group flex items-center justify-between py-2 text-left transition-all duration-300 focus:outline-none">
                  <div class="flex items-center gap-4">
                    <span class="font-mono text-[11px] font-medium tracking-tight transition-colors"
                          [class]="categoriaActiva() === cat.id ? 'text-[#005691]' : 'text-slate-400 group-hover:text-[#005691]'">
                      {{ cat.num }}
                    </span>
                    <span class="font-jakarta text-sm uppercase tracking-wider transition-all duration-300 transform"
                          [class]="categoriaActiva() === cat.id ? 'text-[#0B192C] translate-x-1.5 font-medium' : 'text-slate-500 font-light group-hover:text-[#0B192C] group-hover:translate-x-1'">
                      {{ cat.label }}
                    </span>
                  </div>
                  <div class="h-[1px] bg-[#005691] transition-all duration-300 origin-left"
                       [class]="categoriaActiva() === cat.id ? 'w-8 opacity-100' : 'w-0 opacity-0'"></div>
                </button>
              }
            </div>
          </div>

          <!-- PANEL DERECHO: Grid de Fichas (Glassmorphism Overlay) -->
          <div class="lg:col-span-9 flex flex-col gap-8 min-h-[500px]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              @for (proyecto of proyectosFiltrados(); track proyecto.id) {

                <!-- TARJETA DEL PROYECTO -->
                <article (click)="abrirVisorObra(proyecto)" class="animate-card-enter group cursor-pointer flex flex-col bg-white border border-slate-200 rounded-sm hover:border-[#005691]/40 hover:shadow-xl transition-all duration-500 overflow-hidden h-[420px]">

                  <!-- Cabecera -->
                  <div class="px-5 py-4 flex items-center justify-between border-b border-slate-100 bg-white relative z-20">
                    <span class="font-mono text-[9px] font-medium text-slate-500 border border-slate-200 px-2.5 py-1 rounded-sm">
                      {{ proyecto.codigo }}
                    </span>
                    <div class="flex items-center gap-2">
                      <span class="font-jakarta text-[10px] font-medium uppercase tracking-widest text-[#0B192C]">
                        {{ proyecto.categoria }}
                      </span>
                      <div class="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#005691] transition-colors"></div>
                    </div>
                  </div>

                  <!-- CONTENEDOR DE IMAGEN (Glassmorphism Overlay) -->
                  <div class="relative flex-grow overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img [src]="proyecto.imagen" [alt]="proyecto.titulo"
                         class="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />

                    <div class="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm border-t border-white/50 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <div class="grid grid-cols-3 gap-2">
                        <div class="flex flex-col gap-1 border-r border-slate-200/50">
                          <span class="font-inter text-[8px] text-slate-400 uppercase tracking-widest font-medium">Cliente</span>
                          <span class="font-inter text-[11px] text-[#0B192C] font-medium truncate pr-2">{{ proyecto.cliente }}</span>
                        </div>
                        <div class="flex flex-col gap-1 pl-2 border-r border-slate-200/50">
                          <span class="font-inter text-[8px] text-slate-400 uppercase tracking-widest font-medium">Área</span>
                          <span class="font-mono text-[11px] text-[#1E3E62] font-medium">{{ proyecto.metraje }}</span>
                        </div>
                        <div class="flex flex-col gap-1 pl-2">
                          <span class="font-inter text-[8px] text-slate-400 uppercase tracking-widest font-medium">Plazo</span>
                          <span class="font-mono text-[11px] text-[#005691] font-medium">{{ proyecto.plazo }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- FOOTER SUPER LIMPIO -->
                  <div class="px-6 py-5 bg-white relative z-20 shrink-0">
                    <h3 class="font-jakarta text-[17px] md:text-[19px] font-medium text-[#0B192C] mb-1.5 leading-tight group-hover:text-[#005691] transition-colors truncate">
                      {{ proyecto.titulo }}
                    </h3>
                    <div class="flex items-center justify-between">
                      <span class="font-inter text-[11px] text-slate-500 font-light truncate">{{ proyecto.ubicacion }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-300 group-hover:text-[#005691] group-hover:translate-x-1 transition-all"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </div>

                </article>

              }
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ==========================================
         MODAL / VISOR DE OBRA (PANTALLA COMPLETA)
         ========================================== -->
    @if (proyectoActivo()) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
        <div class="absolute inset-0 bg-[#0B192C]/90 backdrop-blur-md" (click)="cerrarVisorObra()"></div>

        <div class="relative z-10 w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden">

          <button (click)="cerrarVisorObra()" class="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-slate-100 hover:bg-slate-200 text-[#0B192C] p-2 rounded-sm transition-colors focus:outline-none shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          <div class="overflow-y-auto flex-grow p-6 md:p-10 custom-scrollbar">

            <div class="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 border-b border-slate-100 pb-8 pr-12">
              <div>
                <div class="flex items-center gap-3 mb-3">
                  <span class="font-mono text-[10px] text-[#005691] border border-slate-200 px-2.5 py-1 rounded-sm font-medium">{{ proyectoActivo()?.codigo }}</span>
                  <span class="font-jakarta text-[10px] uppercase tracking-widest font-medium text-slate-500">{{ proyectoActivo()?.categoria }}</span>
                </div>
                <h2 class="font-jakarta text-3xl md:text-4xl font-medium text-[#0B192C] leading-tight tracking-tight">{{ proyectoActivo()?.titulo }}</h2>
              </div>
              <div class="text-left md:text-right shrink-0">
                <span class="block font-inter text-[9px] text-slate-400 uppercase tracking-widest font-medium mb-1">Cliente / Comitente</span>
                <span class="block font-inter text-base text-[#0B192C] font-light">{{ proyectoActivo()?.cliente }}</span>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">

              <div class="lg:col-span-1 flex flex-col gap-8">
                <div>
                  <h4 class="font-jakarta text-xs font-medium text-[#0B192C] uppercase tracking-widest mb-3">Memoria Descriptiva</h4>
                  <p class="font-inter text-sm text-slate-500 font-light leading-relaxed">{{ proyectoActivo()?.descripcion }}</p>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 bg-[#F8FAFC] border border-slate-100 p-5 rounded-sm">
                  <div>
                    <span class="block font-inter text-[9px] text-slate-400 uppercase tracking-widest font-medium mb-1">Ubicación</span>
                    <span class="block font-inter text-[13px] text-[#0B192C] font-light">{{ proyectoActivo()?.ubicacion }}</span>
                  </div>
                  <div>
                    <span class="block font-inter text-[9px] text-slate-400 uppercase tracking-widest font-medium mb-1">Plazo de Obra</span>
                    <span class="block font-mono text-[13px] text-[#005691] font-medium">{{ proyectoActivo()?.plazo }}</span>
                  </div>
                  <div class="col-span-2">
                    <span class="block font-inter text-[9px] text-slate-400 uppercase tracking-widest font-medium mb-1">Área Intervenida</span>
                    <span class="block font-mono text-[13px] text-[#1E3E62] font-medium">{{ proyectoActivo()?.metraje }}</span>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-2">
                <h4 class="font-jakarta text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-4">Registro Fotográfico Adicional</h4>
                @if (proyectoActivo()?.galeria?.length) {
                  <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 custom-scrollbar">
                    @for (img of proyectoActivo()?.galeria; track img) {
                      <div class="w-[85%] md:w-[65%] shrink-0 aspect-[16/10] bg-slate-100 rounded-sm snap-center border border-slate-200 overflow-hidden">
                        <img [src]="img" class="w-full h-full object-cover" alt="Vista del Proyecto" loading="lazy" />
                      </div>
                    }
                  </div>
                } @else {
                  <div class="w-full aspect-[21/9] bg-slate-100 rounded-sm overflow-hidden border border-slate-200">
                    <img [src]="proyectoActivo()?.imagen" class="w-full h-full object-cover" alt="Proyecto principal" loading="lazy" />
                  </div>
                }
              </div>
            </div>

            <div class="mb-10">
              <h4 class="font-jakarta text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-4">Inspección Antes y Después</h4>
              <div class="w-full aspect-[16/9] md:aspect-[21/9] bg-slate-100 border border-slate-200 rounded-sm overflow-hidden relative">
                <app-before-after-slider></app-before-after-slider>
              </div>
            </div>

            <div class="pt-8 border-t border-slate-100">
              <span class="block font-inter text-[9px] text-slate-400 uppercase tracking-widest font-medium mb-4">Partidas y Especialidades Intervenidas</span>
              <div class="flex flex-wrap gap-2">
                @for (partida of proyectoActivo()?.partidas; track partida) {
                  <span class="border border-slate-200 bg-[#F8FAFC] text-[#0B192C] font-mono text-[9px] px-3 py-1.5 rounded-sm uppercase tracking-wider">
                    {{ partida }}
                  </span>
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    }

    <!-- ==========================================
         CALL TO ACTION INTERACTIVO
         ========================================== -->
    <section class="bg-[#0B192C] py-24 relative overflow-hidden border-t border-slate-800">
      <div class="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-20"
           style="background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 6rem 6rem;"></div>

      <div class="max-w-5xl mx-auto px-5 md:px-6 relative z-10 text-center flex flex-col items-center">
        <h2 class="font-jakarta text-[38px] md:text-[56px] font-medium leading-[1.05] tracking-tighter text-white mb-6">
          ¿Tiene una partida por resolver en su obra?
        </h2>
        <p class="text-base md:text-lg text-[#94A3B8] font-inter mb-10 leading-relaxed font-light max-w-2xl">
          Escríbanos o envíenos los planos del proyecto. Un ingeniero residente se pondrá en contacto para afinar metrados y proponer soluciones.
        </p>
        <div class="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
          <!-- CORRECCIÓN A routerLink="/contacto" -->
          <a routerLink="/contacto" class="w-full sm:w-auto bg-[#005691] text-white px-8 py-4 rounded-sm text-[13px] font-jakarta font-medium uppercase tracking-[0.1em] hover:bg-[#1E3E62] transition-colors text-center">
            Validar Proyecto
          </a>
          <!-- El enlace a WhatsApp se mantiene con href y target="_blank" -->
          <a href="https://wa.me/51913460898" target="_blank" class="w-full sm:w-auto bg-transparent border border-[#1E3E62] text-white px-8 py-4 rounded-sm text-[13px] font-jakarta font-medium uppercase tracking-[0.1em] hover:bg-[#1E3E62]/20 transition-colors text-center">
            Consulta Técnica Inmediata
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

    @keyframes cardEnter {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-card-enter {
      animation: cardEnter 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    /* Animación infinita para el botón de Scroll-down */
    @keyframes scrollDown {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(12px); opacity: 0; }
    }
    .animate-scroll-down {
      animation: scrollDown 1.5s infinite;
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #F8FAFC;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #94A3B8;
    }
  `]
})
export class Projects implements AfterViewInit {
  @ViewChildren('revealElement') revealElements!: QueryList<ElementRef>;

  proyectoActivo = signal<Proyecto | null>(null);

  categorias: { id: CategoriaProyecto; label: string; num: string }[] = [
    { id: 'todos', label: 'Todos', num: '01' },
    { id: 'corporativo', label: 'Corporativo', num: '02' },
    { id: 'comercial', label: 'Comercial', num: '03' },
    { id: 'industrial', label: 'Industrial', num: '04' },
    { id: 'residencial', label: 'Residencial Lujo', num: '05' }
  ];

  categoriaActiva = signal<CategoriaProyecto>('todos');

  proyectos: Proyecto[] = [
    {
      id: 'the-sight',
      codigo: 'EF-01',
      categoria: 'corporativo',
      titulo: 'Edificio Residencial The Sight',
      cliente: 'Inmobiliaria Edifica',
      ubicacion: 'Barranco, Lima',
      metraje: '4,500 m²',
      plazo: '15 Meses',
      descripcion: 'Construcción integral de casco estructural, levantamiento de muros pantalla y vaciado de losas postensadas para torre de 15 niveles. Ejecución bajo estrictos estándares de seguridad.',
      imagen: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      galeria: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
      ],
      partidas: ['Casco Estructural', 'Muros Pantalla', 'Losas Postensadas']
    },
    {
      id: 'condominio-parque',
      codigo: 'EF-02',
      categoria: 'residencial',
      titulo: 'Condominio Del Parque',
      cliente: 'Cissac S.A.',
      ubicacion: 'Chiclayo',
      metraje: '12,500 m²',
      plazo: '11 Meses',
      descripcion: 'Ejecución masiva de empastados, pintura premium de exteriores e instalación de revestimientos porcelánicos de gran formato.',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      partidas: ['Pintura Premium', 'Acabados Lujo', 'Porcelanatos']
    },
    {
      id: 'boutique-chabrier',
      codigo: 'EF-03',
      categoria: 'comercial',
      titulo: 'Proyecto Boutique Chabrier',
      cliente: 'Lateral Inmobiliaria',
      ubicacion: 'San Isidro, Lima',
      metraje: '2,100 m²',
      plazo: '7 Meses',
      descripcion: 'Remodelación y modernización integral de fachada e interiores para oficinas boutique. Actualización de redes de climatización.',
      imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      partidas: ['Drywall Acústico', 'Fachada Comercial', 'Redes Técnicas']
    },
    {
      id: 'almacen-industrial',
      codigo: 'EF-04',
      categoria: 'industrial',
      titulo: 'Centro de Almacenes Lurín',
      cliente: 'Grupo Inmobiliario L&S',
      ubicacion: 'Lurín, Lima',
      metraje: '22,000 m²',
      plazo: '18 Meses',
      descripcion: 'Construcción de naves industriales, losas de concreto de alta resistencia, redes hidrosanitarias industriales y sistemas de drenaje.',
      imagen: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop',
      partidas: ['Losa Alto Tránsito', 'Redes Pesadas', 'Drenaje']
    },
    {
      id: 'oficinas-bancarias',
      codigo: 'EF-05',
      categoria: 'corporativo',
      titulo: 'Sede Central Financiera',
      cliente: 'Banco de la Nación',
      ubicacion: 'San Borja, Lima',
      metraje: '3,200 m²',
      plazo: '6 Meses',
      descripcion: 'Acondicionamiento y tabiquería con tratamiento acústico de alta densidad. Implementación de redes LED de seguridad.',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      partidas: ['Drywall RF/RH', 'Acústica Especial', 'Redes LED']
    },
    {
      id: 'planta-envasado',
      codigo: 'EF-06',
      categoria: 'industrial',
      titulo: 'Planta de Envasado Norte',
      cliente: 'Alicorp S.A.A.',
      ubicacion: 'Chimbote',
      metraje: '8,500 m²',
      plazo: '12 Meses',
      descripcion: 'Instalación de recubrimientos epóxicos y poliuretano en pisos y muros para alta asepsia. Montaje de redes de fluidos.',
      imagen: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
      partidas: ['Epóxicos Industriales', 'Asepsia', 'Montajes Especiales']
    }
  ];

  proyectosFiltrados = computed(() => {
    const act = this.categoriaActiva();
    if (act === 'todos') return this.proyectos;
    return this.proyectos.filter(p => p.categoria === act);
  });

  filtrar(cat: CategoriaProyecto) {
    this.categoriaActiva.set(cat);
  }

  abrirVisorObra(proyecto: Proyecto) {
    this.proyectoActivo.set(proyecto);
    document.body.style.overflow = 'hidden';
  }

  cerrarVisorObra() {
    this.proyectoActivo.set(null);
    document.body.style.overflow = '';
  }

  ngAfterViewInit() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
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
