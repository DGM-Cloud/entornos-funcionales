import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libro-reclamaciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="w-full bg-[#F8FAFC] pt-[120px] pb-24 md:pt-[160px] md:pb-32">
      <div class="max-w-3xl mx-auto px-5 md:px-6">

        <!-- Cabecera Oficial y Datos del Proveedor -->
        <div class="bg-white p-8 md:p-12 border-t-4 border-[#1E3E62] shadow-sm mb-8">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-slate-200 pb-6">
            <div>
              <h1 class="font-inter text-2xl md:text-3xl font-bold text-[#101827] mb-2 uppercase tracking-tight">Libro de Reclamaciones</h1>
              <p class="font-inter text-sm text-slate-500 font-medium">Hoja de Reclamación Virtual</p>
            </div>
            <img src="assets/libro-reclamaciones.png" alt="Libro Oficial" class="h-12 object-contain">
          </div>

          <div class="bg-slate-50 border border-slate-200 p-4 rounded-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span class="font-inter text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">Proveedor</span>
                <span class="font-inter text-sm text-[#101827] font-medium block">ENTORNOS FUNCIONALES S.A.C.</span>
              </div>
              <div>
                <span class="font-inter text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">RUC</span>
                <span class="font-inter text-sm text-[#101827] font-medium block">20613342002</span>
              </div>
              <div class="md:col-span-2 border-t border-slate-200 pt-3 mt-1">
                <span class="font-inter text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">Domicilio</span>
                <span class="font-inter text-sm text-[#101827] font-medium block">MZ.E LT 40 CMTE 5 FLOR DE AMANCAES</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <form [formGroup]="reclamoForm" (ngSubmit)="enviarReclamo()" class="space-y-8 bg-white p-8 md:p-12 shadow-sm">

          <!-- Sección 1: Datos del Consumidor -->
          <div class="space-y-6">
            <h3 class="font-jakarta text-lg font-bold text-[#1E3E62] border-b border-slate-200 pb-2 uppercase tracking-wide">1. Identificación del Consumidor Reclamante</h3>

            <!-- Pregunta sobre mayoría de edad -->
            <div class="flex flex-col gap-2 mb-6 bg-slate-50 p-4 border border-slate-200 rounded-sm">
              <label class="font-inter text-xs font-bold text-[#101827] uppercase">¿El consumidor es menor de edad?</label>
              <div class="flex gap-6 mt-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" formControlName="esMenor" [value]="true" (change)="toggleApoderado()" class="accent-[#1E3E62] w-4 h-4">
                  <span class="font-inter text-sm text-[#101827]">Sí</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" formControlName="esMenor" [value]="false" (change)="toggleApoderado()" class="accent-[#1E3E62] w-4 h-4">
                  <span class="font-inter text-sm text-[#101827]">No</span>
                </label>
              </div>
            </div>

            <!-- Datos del Apoderado (se muestran si es menor de edad) -->
            <div *ngIf="reclamoForm.get('esMenor')?.value" class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50/50 p-5 rounded-sm border border-blue-100 mb-6">
              <div class="md:col-span-2">
                <p class="font-inter text-xs text-[#1E3E62] font-medium mb-2">Por favor, ingrese el nombre del padre, madre o apoderado.</p>
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Nombre Completo del Apoderado *</label>
                <input type="text" formControlName="nombreApoderado" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Nombre Completo {{ reclamoForm.get('esMenor')?.value ? '(del menor)' : '' }} *</label>
                <input type="text" formControlName="nombre" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">DNI / CE *</label>
                <input type="text" formControlName="documento" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Teléfono *</label>
                <input type="tel" formControlName="telefono" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Domicilio *</label>
                <input type="text" formControlName="domicilio" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">E-Mail (Correo Electrónico) *</label>
                <input type="email" formControlName="correo" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
            </div>
          </div>

          <!-- Sección 2: Identificación del Bien -->
          <div class="space-y-6 pt-4">
            <h3 class="font-jakarta text-lg font-bold text-[#1E3E62] border-b border-slate-200 pb-2 uppercase tracking-wide">2. Identificación del Bien Contratado</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Tipo de Bien *</label>
                <select formControlName="tipoBien" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
                  <option value="Servicio">Servicio</option>
                  <option value="Producto">Producto</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Monto Reclamado (Opcional)</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 font-inter text-sm text-slate-500">S/</span>
                  <input type="number" formControlName="montoReclamado" class="w-full pl-9 pr-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]" placeholder="0.00">
                </div>
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Descripción del Producto o Servicio *</label>
                <input type="text" formControlName="descripcionBien" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
            </div>
          </div>

          <!-- Sección 3: Detalle y Pedido -->
          <div class="space-y-6 pt-4">
            <h3 class="font-jakarta text-lg font-bold text-[#1E3E62] border-b border-slate-200 pb-2 uppercase tracking-wide">3. Detalle de la Reclamación y Pedido del Consumidor</h3>

            <div class="bg-slate-50 p-4 border border-slate-200 rounded-sm mb-4">
              <div class="flex flex-col sm:flex-row gap-6">
                <label class="flex items-start gap-2 cursor-pointer">
                  <input type="radio" formControlName="tipoReclamo" value="Reclamo" class="accent-[#1E3E62] mt-1 w-4 h-4">
                  <div>
                    <span class="font-inter text-sm font-bold text-[#101827] block">RECLAMO</span>
                    <span class="font-inter text-[11px] text-slate-500 block leading-tight mt-0.5">Disconformidad relacionada a los productos o servicios.</span>
                  </div>
                </label>
                <label class="flex items-start gap-2 cursor-pointer">
                  <input type="radio" formControlName="tipoReclamo" value="Queja" class="accent-[#1E3E62] mt-1 w-4 h-4">
                  <div>
                    <span class="font-inter text-sm font-bold text-[#101827] block">QUEJA</span>
                    <span class="font-inter text-[11px] text-slate-500 block leading-tight mt-0.5">Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público.</span>
                  </div>
                </label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-inter text-xs font-bold text-slate-600 uppercase">Detalle *</label>
              <textarea formControlName="detalle" rows="5" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]"></textarea>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-inter text-xs font-bold text-slate-600 uppercase">Pedido *</label>
              <textarea formControlName="pedido" rows="3" class="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]"></textarea>
            </div>
          </div>

          <!-- Alerta de Estado -->
          <div *ngIf="mensajeExito" class="bg-[#0D9488]/10 border border-[#0D9488]/20 p-4 rounded-sm">
            <p class="font-inter text-sm text-[#0D9488] font-medium">{{ mensajeExito }}</p>
          </div>

          <div *ngIf="mensajeError" class="bg-red-50 border border-red-200 p-4 rounded-sm">
            <p class="font-inter text-sm text-red-600 font-medium">{{ mensajeError }}</p>
          </div>

          <!-- Notas Legales -->
          <div class="border-t border-slate-200 pt-6 space-y-2">
            <p class="font-inter text-[10px] text-slate-500 leading-relaxed text-justify">
              * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
            </p>
            <p class="font-inter text-[10px] text-slate-500 leading-relaxed text-justify">
              * El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles, el cual es improrrogable.
            </p>
          </div>

          <!-- Envío -->
          <div class="pt-4">
            <button type="submit" [disabled]="reclamoForm.invalid || enviando"
                    class="w-full md:w-auto px-10 py-4 bg-[#1E3E62] hover:bg-[#335092] text-white font-inter text-sm font-bold uppercase tracking-widest rounded-sm transition-colors disabled:opacity-50">
              {{ enviando ? 'Enviando Hoja de Reclamación...' : 'Enviar Hoja de Reclamación' }}
            </button>
          </div>

        </form>
      </div>
    </section>
  `
})
export class LibroReclamacionesComponent {
  reclamoForm: FormGroup;
  enviando = false;
  mensajeExito = '';
  mensajeError = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reclamoForm = this.fb.group({
      // 1. Identificación del Consumidor
      esMenor: [false, Validators.required],
      nombreApoderado: [''],
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      domicilio: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],

      // 2. Identificación del Bien
      tipoBien: ['Servicio', Validators.required],
      montoReclamado: [''],
      descripcionBien: ['', Validators.required],

      // 3. Detalle y Pedido
      tipoReclamo: ['Reclamo', Validators.required],
      detalle: ['', Validators.required],
      pedido: ['', Validators.required]
    });
  }

  toggleApoderado() {
    const esMenorControl = this.reclamoForm.get('esMenor');
    const nombreApoderadoControl = this.reclamoForm.get('nombreApoderado');

    if (esMenorControl?.value) {
      nombreApoderadoControl?.setValidators(Validators.required);
    } else {
      nombreApoderadoControl?.clearValidators();
      nombreApoderadoControl?.setValue('');
    }

    nombreApoderadoControl?.updateValueAndValidity();
  }

  enviarReclamo() {
    if (this.reclamoForm.invalid) {
      this.reclamoForm.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    this.http.post('/.netlify/functions/enviar-reclamo', this.reclamoForm.value).subscribe({
      next: (res: any) => {
        this.enviando = false;
        this.mensajeExito = `Reclamo ingresado correctamente. Se ha enviado una copia legal a su correo. (Ticket: ${res.ticket})`;
        this.reclamoForm.reset({ esMenor: false, tipoBien: 'Servicio', tipoReclamo: 'Reclamo' });
      },
      error: () => {
        this.enviando = false;
        this.mensajeError = 'Ocurrió un error al procesar el documento. Por favor, intente nuevamente.';
      }
    });
  }
}
