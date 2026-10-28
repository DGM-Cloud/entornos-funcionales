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

        <!-- Cabecera Oficial -->
        <div class="bg-white p-8 md:p-12 border-t-4 border-[#1E3E62] shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 class="font-inter text-2xl md:text-3xl font-medium text-[#101827] mb-2">Libro de Reclamaciones</h1>
            <p class="font-inter text-sm text-slate-500">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor.</p>
          </div>
          <img src="assets/libro-reclamaciones.png" alt="Libro Oficial" class="h-14 object-contain">
        </div>

        <!-- Formulario -->
        <form [formGroup]="reclamoForm" (ngSubmit)="enviarReclamo()" class="space-y-8 bg-white p-8 md:p-12 shadow-sm">

          <!-- Sección 1: Datos -->
          <div class="space-y-6">
            <h3 class="font-jakarta text-lg font-medium text-[#1E3E62] border-b border-slate-200 pb-2">1. Identificación del Consumidor</h3>

            <!-- Pregunta sobre mayoría de edad -->
            <div class="flex flex-col gap-2 mb-6">
              <label class="font-inter text-xs font-bold text-slate-600 uppercase">¿El consumidor es menor de edad?</label>
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" formControlName="esMenor" [value]="true" (change)="toggleApoderado()" class="accent-[#1E3E62]">
                  <span class="font-inter text-sm text-[#101827]">Sí</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" formControlName="esMenor" [value]="false" (change)="toggleApoderado()" class="accent-[#1E3E62]">
                  <span class="font-inter text-sm text-[#101827]">No</span>
                </label>
              </div>
            </div>

            <!-- Datos del Apoderado (se muestran si es menor de edad) -->
            <div *ngIf="reclamoForm.get('esMenor')?.value" class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-sm border border-slate-200 mb-6">
              <div class="md:col-span-2">
                <p class="font-inter text-xs text-slate-500 mb-2">Por favor, ingrese los datos del padre, madre o apoderado.</p>
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Nombre del Apoderado</label>
                <input type="text" formControlName="nombreApoderado" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Documento del Apoderado</label>
                <input type="text" formControlName="documentoApoderado" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Nombre Completo {{ reclamoForm.get('esMenor')?.value ? '(del menor)' : '' }}</label>
                <input type="text" formControlName="nombre" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">DNI / CE / RUC</label>
                <input type="text" formControlName="documento" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Correo Electrónico</label>
                <input type="email" formControlName="correo" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
              </div>
            </div>
          </div>

          <!-- Sección 2: Detalle -->
          <div class="space-y-6">
            <h3 class="font-jakarta text-lg font-medium text-[#1E3E62] border-b border-slate-200 pb-2">2. Detalle de la Reclamación</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Tipo de Bien</label>
                <select formControlName="tipoBien" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
                  <option value="Servicio">Servicio (Instalación, Ejecución)</option>
                  <option value="Producto">Producto (Materiales, Acabados)</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="font-inter text-xs font-bold text-slate-600 uppercase">Tipo de Solicitud</label>
                <select formControlName="tipoReclamo" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]">
                  <option value="Reclamo">Reclamo (Disconformidad con el servicio)</option>
                  <option value="Queja">Queja (Malestar por la atención)</option>
                </select>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-inter text-xs font-bold text-slate-600 uppercase">Detalle exacto de los hechos</label>
              <textarea formControlName="detalle" rows="4" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]"></textarea>
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-inter text-xs font-bold text-slate-600 uppercase">Pedido concreto del consumidor</label>
              <textarea formControlName="pedido" rows="3" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm font-inter text-sm text-[#101827] focus:outline-none focus:border-[#5C968D]"></textarea>
            </div>
          </div>

          <!-- Alerta de Estado -->
          <div *ngIf="mensajeExito" class="bg-[#0D9488]/10 border border-[#0D9488]/20 p-4 rounded-sm">
            <p class="font-inter text-sm text-[#0D9488] font-medium">{{ mensajeExito }}</p>
          </div>

          <div *ngIf="mensajeError" class="bg-red-50 border border-red-200 p-4 rounded-sm">
            <p class="font-inter text-sm text-red-600 font-medium">{{ mensajeError }}</p>
          </div>

          <!-- Envío -->
          <div class="pt-4 border-t border-slate-200">
            <button type="submit" [disabled]="reclamoForm.invalid || enviando"
                    class="w-full md:w-auto px-8 py-4 bg-[#1E3E62] hover:bg-[#335092] text-white font-inter text-xs font-bold uppercase tracking-widest rounded-sm transition-colors disabled:opacity-50">
              {{ enviando ? 'Procesando Documento...' : 'Enviar Reclamación Formal' }}
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
      esMenor: [false, Validators.required],
      nombreApoderado: [''],
      documentoApoderado: [''],
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      tipoBien: ['Servicio', Validators.required],
      tipoReclamo: ['Reclamo', Validators.required],
      detalle: ['', Validators.required],
      pedido: ['', Validators.required]
    });
  }

  toggleApoderado() {
    const esMenorControl = this.reclamoForm.get('esMenor');
    const nombreApoderadoControl = this.reclamoForm.get('nombreApoderado');
    const documentoApoderadoControl = this.reclamoForm.get('documentoApoderado');

    if (esMenorControl?.value) {
      nombreApoderadoControl?.setValidators(Validators.required);
      documentoApoderadoControl?.setValidators(Validators.required);
    } else {
      nombreApoderadoControl?.clearValidators();
      documentoApoderadoControl?.clearValidators();
      nombreApoderadoControl?.setValue('');
      documentoApoderadoControl?.setValue('');
    }

    nombreApoderadoControl?.updateValueAndValidity();
    documentoApoderadoControl?.updateValueAndValidity();
  }

  enviarReclamo() {
    if (this.reclamoForm.invalid) return;

    this.enviando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    // Llamamos a la Netlify Function oculta
    this.http.post('/.netlify/functions/enviar-reclamo', this.reclamoForm.value).subscribe({
      next: (res: any) => {
        this.enviando = false;
        this.mensajeExito = `Reclamo ingresado correctamente. Se ha enviado una copia legal a su correo. (Ticket: ${res.ticket})`;
        this.reclamoForm.reset({ esMenor: false, tipoBien: 'Servicio', tipoReclamo: 'Reclamo' });
      },
      error: () => {
        this.enviando = false;
        this.mensajeError = 'Ocurrió un error al procesar el reclamo. Por favor, intente nuevamente o comuníquese por teléfono.';
      }
    });
  }
}
