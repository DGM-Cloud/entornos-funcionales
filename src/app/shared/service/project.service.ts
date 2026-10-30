import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projects: Proyecto[] = [
    {
      id: 'the-sight',
      codigo: 'EF-01',
      categoria: 'residencial',
      titulo: 'Edificio Residencial The Sight',
      cliente: 'Inmobiliaria Edifica',
      ubicacion: 'Barranco, Lima',
      metraje: '4,500 m²',
      plazo: '15 Meses',
      descripcion: 'Construcción integral de casco estructural, remodelaciones y trabajos en alturas para torre de vivienda moderna. Ejecución bajo estrictos estándares de seguridad y acabados.',
      imagen: 'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793332153/Trabajadores_en_el_tejado_urbano.png',
      galeria: [
        'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793320487/Pabell%C3%B3n_moderno_en_construcci%C3%B3n.png'
      ],
      partidas: ['Estructuras y Acabados', 'Trabajo en Alturas', 'Drywall']
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
      descripcion: 'Renovación de patios, empastados, instalación de iluminación y acabados arquitectónicos exteriores. Transformación de áreas comunes.',
      imagen: 'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793332711/Renovaci%C3%B3n_de_patio_moderno_en_construcci%C3%B3n.png',
      partidas: ['Pintura Premium', 'Acabados Exteriores', 'Iluminación']
    },
    {
      id: 'boutique-chabrier',
      codigo: 'EF-03',
      categoria: 'comercial',
      titulo: 'Boutique Floral y Pérgolas',
      cliente: 'Lateral Inmobiliaria',
      ubicacion: 'San Isidro, Lima',
      metraje: '2,100 m²',
      plazo: '7 Meses',
      descripcion: 'Remodelación y modernización integral de fachada con acabados rústicos/modernos, pérgolas de madera y cerramientos estéticos para local comercial.',
      imagen: 'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793318606/Entrada_moderna_con_p%C3%A9rgola_y_flores.png',
      partidas: ['Carpintería', 'Fachada Comercial', 'Acabados Estéticos']
    },
    {
      id: 'almacen-industrial',
      codigo: 'EF-04',
      categoria: 'industrial',
      titulo: 'Ampliación Planta Lurín',
      cliente: 'Grupo Inmobiliario L&S',
      ubicacion: 'Lurín, Lima',
      metraje: '22,000 m²',
      plazo: '18 Meses',
      descripcion: 'Instalación de paneles solares, mantenimiento eléctrico integral y montaje de tableros de distribución de alto voltaje para nave industrial.',
      imagen: 'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793335503/Trabajadores_ajustando_panel_solar_y_sistemas.png',
      partidas: ['Electricidad Industrial', 'Eficiencia Energética', 'Tableros']
    },
    {
      id: 'sistemas-incendios',
      codigo: 'EF-05',
      categoria: 'industrial',
      titulo: 'Red Contra Incendios Sur',
      cliente: 'Alicorp S.A.A.',
      ubicacion: 'Chimbote',
      metraje: '8,500 m²',
      plazo: '12 Meses',
      descripcion: 'Montaje de sistema integral de válvulas industriales, bombas y rociadores contra incendios bajo normativas estrictas de seguridad (INDECI).',
      imagen: 'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793336167/Sistema_de_v%C3%A1lvulas_contra_incendios_industriales.png',
      galeria: [
        'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793329130/Sistema_de_rociadores_sobre_escalera_amarilla.png'
      ],
      partidas: ['Redes Hidrosanitarias', 'Sistemas Contra Incendio', 'Normativa INDECI']
    },
    {
      id: 'sistemas-hvac',
      codigo: 'EF-06',
      categoria: 'corporativo',
      titulo: 'Torre Empresarial (Climatización)',
      cliente: 'Banco de la Nación',
      ubicacion: 'San Borja, Lima',
      metraje: '3,200 m²',
      plazo: '6 Meses',
      descripcion: 'Acondicionamiento y montaje de ductos, válvulas y sistemas HVAC centralizados para climatización eficiente de sede corporativa.',
      imagen: 'https://res.cloudinary.com/w775d4fq/image/upload/f_auto,q_auto/v1793333041/Instalaci%C3%B3n_HVAC_con_Tuber%C3%ADas_y_Man%C3%B3metros.png',
      partidas: ['Climatización / HVAC', 'Mantenimiento Preventivo']
    }
  ];

  getProjects(): Proyecto[] {
    return this.projects;
  }
}
