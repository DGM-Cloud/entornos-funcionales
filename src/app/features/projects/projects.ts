import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BeforeAfterSlider } from '../../shared/components/before-after-slider/before-after-slider';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { Proyecto, CategoriaProyecto } from '../../shared/interfaces/proyecto.interface';
import { ProjectService } from '../../shared/service/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BeforeAfterSlider, RouterLink, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements AfterViewInit {
  @ViewChildren('revealElement') revealElements!: QueryList<ElementRef>;

  private projectService = inject(ProjectService);

  proyectoActivo = signal<Proyecto | null>(null);

  categorias: { id: CategoriaProyecto; label: string; num: string }[] = [
    { id: 'todos', label: 'Todos', num: '01' },
    { id: 'cubiertas', label: 'Cubiertas', num: '02' },
    { id: 'remodelacion', label: 'Remodelación', num: '03' },
    { id: 'construccion', label: 'Construcción', num: '04' },
    { id: 'interiores', label: 'Interiores', num: '05' },
    { id: 'climatizacion', label: 'Climatización', num: '06' }
  ];

  categoriaActiva = signal<CategoriaProyecto>('todos');

  proyectos: Proyecto[] = this.projectService.getProjects();

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
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
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
      if (this.revealElements) {
        this.revealElements.forEach(el => observer.observe(el.nativeElement));
      }
    }, 50);
  }
}
