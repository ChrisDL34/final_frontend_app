import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../../../core/models/users.model';
import { ModalElementComponent } from '../../elements/modal-element/modal-element.component';

@Component({
  selector: 'app-admin-managment',
  standalone: true,
  imports: [CommonModule, ModalElementComponent],
  templateUrl: './admin-managment.component.html',
  styleUrls: ['./admin-managment.component.css']
})
export class AdminManagmentComponent {
  @Input() users!: User[] | null;
  @Input() deleteUser: (userId: string) => void;
  @Input() addUser: () => void;
  @Input() buyBooks: (supplierId: string) => void;
  @Input() editUser: (user: User) => void;
  @Input() modalTitle: string;
  @Input() modalMessage: string;
  @Input() modalCloseButtonMessage: string;
  @Input() modalConfirmButtonMessage: string | undefined;
  @Input() modalContinueBehavior: (any) => void | undefined;
  @Input() modalIsShown: boolean;
  @Input() modalContinueParams: any;
  @Input() modalCloseBehavior: () => void;
}