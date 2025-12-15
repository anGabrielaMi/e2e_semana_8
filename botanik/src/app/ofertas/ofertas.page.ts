import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
  standalone: false,
})
export class OfertasPage implements OnInit {

  ofertas = [
    {
      titulo: 'Pack Jardín Aromático',
      descripcion: 'Incluye lavanda, menta y romero en macetas biodegradables.',
      precio: '$12.990',
      imagen: 'assets/ofertas/aromatico.png'
    },
    {
      titulo: 'Kit Huerto Urbano',
      descripcion: 'Todo lo necesario para comenzar tu huerto en casa.',
      precio: '$18.500',
      imagen: 'assets/ofertas/huerto.png'
    },
    {
      titulo: 'Decoración Botánica',
      descripcion: 'Cuadros y textiles con ilustraciones de plantas nativas.',
      precio: '$9.990',
      imagen: 'assets/ofertas/decoracion.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}