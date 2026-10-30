import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

const imagenesProyecto = (numero: number, cantidad: number) => {
  const carpeta = String(numero).padStart(2, '0');

  return Array.from(
    { length: cantidad },
    (_, indice) => `assets/projects/project-${carpeta}/${String(indice + 1).padStart(2, '0')}.jpg`
  );
};

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly projects: Proyecto[] = [
    {
      id: 'proyecto-01', codigo: 'EF-01', categoria: 'cubiertas', titulo: 'Proyecto 01 · Cubiertas',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de trabajos en cubierta. Los datos técnicos y comerciales del proyecto están pendientes de validación por Entornos Funcionales.',
      imagen: imagenesProyecto(1, 12)[0], galeria: imagenesProyecto(1, 12),
      partidas: ['Cubiertas', 'Trabajo en alturas']
    },
    {
      id: 'proyecto-02', codigo: 'EF-02', categoria: 'remodelacion', titulo: 'Proyecto 02 · Remodelación interior',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de intervención y acabados interiores. El alcance definitivo está pendiente de confirmación por Entornos Funcionales.',
      imagen: imagenesProyecto(2, 9)[0], galeria: imagenesProyecto(2, 9),
      partidas: ['Remodelación', 'Acabados interiores']
    },
    {
      id: 'proyecto-03', codigo: 'EF-03', categoria: 'construccion', titulo: 'Proyecto 03 · Implementación técnica',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de estructura, tabiquería e instalaciones técnicas. La memoria descriptiva será completada con información validada del cliente.',
      imagen: imagenesProyecto(3, 8)[0], galeria: imagenesProyecto(3, 8),
      partidas: ['Construcción', 'Instalaciones técnicas']
    },
    {
      id: 'proyecto-04', codigo: 'EF-04', categoria: 'construccion', titulo: 'Proyecto 04 · Estructura metálica',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico del proceso de ejecución de una estructura metálica. Los datos de obra se mantienen pendientes de confirmación.',
      imagen: imagenesProyecto(4, 15)[0], galeria: imagenesProyecto(4, 15),
      partidas: ['Estructura metálica', 'Construcción liviana']
    },
    {
      id: 'proyecto-05', codigo: 'EF-05', categoria: 'interiores', titulo: 'Proyecto 05 · Iluminación interior',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de acondicionamiento e iluminación interior. El detalle técnico será actualizado cuando Entornos Funcionales lo valide.',
      imagen: imagenesProyecto(5, 6)[0], galeria: imagenesProyecto(5, 6),
      partidas: ['Iluminación', 'Acabados interiores']
    },
    {
      id: 'proyecto-06', codigo: 'EF-06', categoria: 'interiores', titulo: 'Proyecto 06 · Adecuación de oficina',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de una adecuación interior. La información de alcance, cliente, ubicación y plazos está pendiente de confirmación.',
      imagen: imagenesProyecto(6, 2)[0], galeria: imagenesProyecto(6, 2),
      partidas: ['Adecuación de oficinas', 'Interiores']
    },
    {
      id: 'proyecto-07', codigo: 'EF-07', categoria: 'climatizacion', titulo: 'Proyecto 07 · Climatización',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de instalaciones y equipos de climatización. Los datos técnicos específicos deben ser confirmados por Entornos Funcionales.',
      imagen: imagenesProyecto(7, 14)[0], galeria: imagenesProyecto(7, 14),
      partidas: ['Climatización', 'Instalaciones HVAC']
    },
    {
      id: 'proyecto-08', codigo: 'EF-08', categoria: 'cubiertas', titulo: 'Proyecto 08 · Impermeabilización',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de trabajos de impermeabilización en cubierta. La ficha técnica está pendiente de validación.',
      imagen: imagenesProyecto(8, 4)[0], galeria: imagenesProyecto(8, 4),
      partidas: ['Impermeabilización', 'Cubiertas']
    },
    {
      id: 'proyecto-09', codigo: 'EF-09', categoria: 'interiores', titulo: 'Proyecto 09 · Mobiliario integrado',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de fabricación e instalación de mobiliario integrado. La información comercial se mantiene por confirmar.',
      imagen: imagenesProyecto(9, 6)[0], galeria: imagenesProyecto(9, 6),
      partidas: ['Mobiliario integrado', 'Carpintería']
    },
    {
      id: 'proyecto-10', codigo: 'EF-10', categoria: 'interiores', titulo: 'Proyecto 10 · Mobiliario de cocina',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de implementación de mobiliario de cocina. Los datos de ubicación, metraje y plazo requieren confirmación.',
      imagen: imagenesProyecto(10, 4)[0], galeria: imagenesProyecto(10, 4),
      partidas: ['Mobiliario de cocina', 'Interiores']
    },
    {
      id: 'proyecto-11', codigo: 'EF-11', categoria: 'construccion', titulo: 'Proyecto 11 · Cubierta metálica',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de ejecución y acabado de una estructura de cubierta. La memoria final será completada con datos validados.',
      imagen: imagenesProyecto(11, 3)[0], galeria: imagenesProyecto(11, 3),
      partidas: ['Cubierta metálica', 'Construcción']
    },
    {
      id: 'proyecto-12', codigo: 'EF-12', categoria: 'climatizacion', titulo: 'Proyecto 12 · Mantenimiento HVAC',
      cliente: 'Por confirmar', ubicacion: 'Por confirmar', metraje: 'Por confirmar', plazo: 'Por confirmar',
      descripcion: 'Registro fotográfico de mantenimiento de equipos de climatización. Las especificaciones del servicio están pendientes de confirmación.',
      imagen: imagenesProyecto(12, 2)[0], galeria: imagenesProyecto(12, 2),
      partidas: ['Mantenimiento HVAC', 'Climatización']
    }
  ];

  getProjects(): Proyecto[] {
    return this.projects;
  }
}
