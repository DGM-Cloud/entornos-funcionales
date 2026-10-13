import { Component, Input, signal, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-before-after-slider',
  standalone: true,
  template: `
    <!-- Contenedor principal del Slider (Sin títulos, solo el componente interactivo) -->
    <div class="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-slate-100 rounded-lg overflow-hidden shadow-2xl cursor-ew-resize"
         #sliderContainer
         (mousedown)="startSliding($event)"
         (touchstart)="startSliding($event)">

      <!-- Imagen 'Después' (Fondo) -->
      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
           alt="Acabado Final"
           class="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />

      <!-- Badge 'Acabado Final' -->
      <div class="absolute top-6 right-6 bg-primary-navy text-white text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-sm font-jakarta z-0 shadow-md">
        Acabado Final
      </div>

      <!-- Imagen 'Antes' (Recortada dinámicamente) -->
      <div class="absolute inset-0 z-10 select-none pointer-events-none"
           [style.clip-path]="'inset(0 ' + (100 - sliderPosition()) + '% 0 0)'">

        <!-- Sin opacity para evitar efecto fantasma, solo escala de grises y ajuste de brillo -->
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
             alt="Estado Inicial"
             class="absolute inset-0 w-full h-full object-cover grayscale brightness-90" />

        <!-- Badge 'Estado Inicial' -->
        <div class="absolute top-6 left-6 bg-white text-primary-navy text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-sm font-jakarta shadow-md">
          Estado Inicial
        </div>
      </div>

      <!-- Línea Separadora y Botón Deslizador -->
      <div class="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
           [style.left.%]="sliderPosition()">

        <!-- Botón circular central -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-200 text-brand-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18 6-6-6-6"/><path d="M9 18 3 12l6-6"/>
          </svg>
        </div>
      </div>

    </div>
  `
})
export class BeforeAfterSlider {
  sliderPosition = signal(50);
  isSliding = false;

  @Input() imgAntes: string = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop';
  @Input() imgDespues: string = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop';

  @ViewChild('sliderContainer') container!: ElementRef<HTMLDivElement>;

  startSliding(event: MouseEvent | TouchEvent) {
    this.isSliding = true;
    this.updatePosition(event);
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  stopSliding() {
    this.isSliding = false;
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMove(event: MouseEvent | TouchEvent) {
    if (!this.isSliding) return;
    this.updatePosition(event);
  }

  private updatePosition(event: MouseEvent | TouchEvent) {
    if (!this.container) return;

    const rect = this.container.nativeElement.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX;

    // Cálculo corregido
    let position = ((clientX - rect.left) / rect.width) * 100;

    // Limitamos la posición entre 0% y 100%
    position = Math.max(0, Math.min(100, position));
    this.sliderPosition.set(position);
  }
}
