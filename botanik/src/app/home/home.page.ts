import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Categoria {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  categorias: Categoria[] = [
    {
      id: 1,
      titulo: 'Plantas de interior',
      imagen: 'assets/img/interior.png',
      descripcion: 'Ver opciones para espacios luminosos, húmedos o con sombra parcial.',
    },
    {
      id: 2,
      titulo: 'Plantas de exterior',
      imagen: 'assets/img/exterior.png',
      descripcion: 'Explora variedades resistentes al sol, viento y cambios de estación.',
    },
    {
      id: 3,
      titulo: 'Bienestar y aromáticas',
      imagen: 'assets/img/bienestar.png',
      descripcion: 'Descubre plantas que relajan, purifican y aromatizan tu entorno.',
    },
    {
      id: 5,
      titulo: 'Kits y regalos',
      imagen: 'assets/img/regalos.png',
      descripcion: 'Encuentra sets botánicos para regalar o iniciar tu jardín personal.',
    },
  ];

  constructor(private router: Router) {}

  verCategoria(categoria: Categoria): void {
    const rutas: Record<number, string> = {
      1: 'categorias/interior',
      2: 'categorias/exterior',
      3: 'categorias/bienestar',
      5: 'categorias/regalos'
    };

    const ruta = rutas[categoria.id];
    if (ruta) {
      this.router.navigate([`/${ruta}`]);
    } else {
      console.warn('Ruta no definida para la categoría:', categoria);
    }
  }
}