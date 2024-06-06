import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Libro {
  titulo: string;
  autor: string;
  tipo: string;
  precio: number;
}

interface ItemCarrito {
  libro: Libro;
  cantidad: number;
}

@Component({
  selector: 'app-request-provider',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './request-provider.component.html',
  styleUrls: ['./request-provider.component.css']
})
export class RequestProviderComponent {

  constructor( private router: Router) {
  }

  libros: Libro[] = [
    {
      titulo: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      tipo: 'Novela',
      precio: 25.00
    },
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      tipo: 'Novela',
      precio: 20.00
    }
    // ... resto de los libros ...
  ];

  carrito: ItemCarrito[] = [];
  mostrarModal = false;

  agregarAlCarrito(libro: Libro) {
    const itemExistente = this.carrito.find(item => item.libro === libro);
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      this.carrito.push({ libro, cantidad: 1 });
    }
  }

  quitarDelCarrito(libro: Libro) {
    const itemExistente = this.carrito.find(item => item.libro === libro);
    if (itemExistente) {
      itemExistente.cantidad--;
      if (itemExistente.cantidad === 0) {
        this.carrito = this.carrito.filter(item => item.libro !== libro);
      }
    }
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  totalCarrito() {
    return this.carrito.reduce((total, item) => total + item.libro.precio * item.cantidad, 0);
  }

  enviarSolicitud() {
    console.log('Solicitud enviada:', this.carrito);
    this.carrito = [];
    this.cerrarModal();
  }

  cancel() {
    this.router.navigate(['/admin-managment']);
  }
}
