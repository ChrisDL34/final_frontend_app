import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { UserService } from '../../../core/services/user.service';
import { Book } from '../../../core/models/book.model';


interface Libro {
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
export class RequestProviderComponent {

  libros: Libro[] = [];
  carrito: ItemCarrito[] = [];
  mostrarModal = false;
  supplierId: string | null = null;

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
