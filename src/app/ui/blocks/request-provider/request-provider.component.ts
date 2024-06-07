// request-provider.component.ts
import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { Book } from '../../../core/models/book.model';

interface Libro {
  id: string;
  titulo: string;
  autor: string;
  tipo: string;
  precio: number;
  stock: number;
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
export class RequestProviderComponent implements OnInit {

  libros: Libro[] = [];
  carrito: ItemCarrito[] = [];
  mostrarModal = false;
  supplierId: string | null = null;
  respuestaSolicitud: any = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.supplierId = this.route.snapshot.paramMap.get('supplierId');
    if (this.supplierId) {
      this.userService.getSupplierBooks(this.supplierId).subscribe((libros) => {
        this.libros = libros.map(libro => ({
          id: libro.id,
          titulo: libro.title,
          autor: libro.author,
          tipo: libro.itemType,
          precio: libro.sellPrice,
          stock: libro.stock
        }));
      });
    }
  }

  agregarAlCarrito(libro: Libro) {
    const itemExistente = this.carrito.find(item => item.libro.id === libro.id);
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      this.carrito.push({ libro, cantidad: 1 });
    }
  }

  quitarDelCarrito(libro: Libro) {
    const itemExistente = this.carrito.find(item => item.libro.id === libro.id);
    if (itemExistente) {
      itemExistente.cantidad--;
      if (itemExistente.cantidad === 0) {
        this.carrito = this.carrito.filter(item => item.libro.id !== libro.id);
      }
    }
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.respuestaSolicitud = null; // Limpiar la respuesta al cerrar el modal
  }

  totalCarrito() {
    return this.carrito.reduce((total, item) => total + item.libro.precio * item.cantidad, 0);
  }

  confirmarCompra(confirmado: boolean) {
    if (this.respuestaSolicitud && this.respuestaSolicitud.quoteId) {
      const request = {
        quoteId: this.respuestaSolicitud.quoteId,
        confirmed: confirmado
      };
  
      this.userService.confirmQuote(request).subscribe(
        (response) => {
          console.log('Compra confirmada:', response);
          this.cerrarModal();
          // Realizar otras acciones necesarias después de confirmar la compra
        },
        (error) => {
          console.error('Error al confirmar la compra:', error);
        }
      );
    }
  }


 enviarSolicitud() {
  if (this.supplierId) {
    const items = this.carrito.map(item => ({
      id: item.libro.id,
      amount: item.cantidad
    }));

    this.userService.requestQuote(this.supplierId, { itemIdList: items }).subscribe(
      (response) => {
        this.respuestaSolicitud = response;
        console.log('Solicitud enviada:', response);
        this.carrito = [];
        this.abrirModal();
      },
      (error) => {
        console.error('Error al enviar la solicitud:', error);
      }
    );
  }
}

  cancel() {
    this.router.navigate(['/admin-managment']);
  }
}
