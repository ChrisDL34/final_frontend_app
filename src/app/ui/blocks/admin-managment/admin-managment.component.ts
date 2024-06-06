import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../core/models/users.model';

@Component({
  selector: 'app-admin-managment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-managment.component.html',
  styleUrls: ['./admin-managment.component.css']
})
export class AdminManagmentComponent {
  @Input()
  users!: User[] | null;
}

  /*


  usuarios = [
    { username: 'john_doe', email: 'john@example.com', rol: 'admin' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'user' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' },
    { username: 'jane_smith', email: 'jane@example.com', rol: 'provider' }
  ];

  editarUsuario(usuario: any) {


  }

  eliminarUsuario(usuario: any) {

  }

  pedidoUsuario(usuario: any) {
    this.router.navigate(['/request-providers']);
  }

  agregarUsuario() {
    this.router.navigate(['/request-providers']);
  }

}
<div class="buttton_container">
    <a class="add-user-button" (click)="agregarUsuario()">Agregar Usuario</a>
</div>

                        <button (click)="editarUsuario(usuario)">Editar</button>
                        <button (click)="eliminarUsuario(usuario)">Eliminar</button>
                        <button *ngIf="usuario.rol === 'provider'" (click)="pedidoUsuario(usuario)">Pedido</button>

*/
