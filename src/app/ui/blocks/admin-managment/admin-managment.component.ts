import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-managment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-managment.component.html',
  styleUrls: ['./admin-managment.component.css']
})
export class AdminManagmentComponent {
  constructor(private router: Router) {}

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
    this.router.navigate(['/edit-user']);
  
  }

  eliminarUsuario(usuario: any) {
    
  }

  pedidoUsuario(usuario: any) {
    this.router.navigate(['/request-providers']);
  }

  agregarUsuario() {
    this.router.navigate(['/add-user']);
  }
}