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

  constructor(private router: Router) {}

  @Input()
  users!: User[] | null;

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


