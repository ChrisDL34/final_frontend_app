import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/models/users.model';
import { UserContainerFacade } from './user-container.facade';
import { AdminManagmentComponent } from '../../ui/blocks/admin-managment/admin-managment.component';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [AdminManagmentComponent, AsyncPipe],
  templateUrl: './user-container.component.html',
})
export class UserContainerComponent implements OnInit, OnDestroy {
  public users$!: Observable<User[]>;

  constructor(
    private readonly facade: UserContainerFacade,
    private router: Router
  ){}

  ngOnInit() {
    this.facade.initSubcristion();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscription();
  }

  private initializeSubscriptions(): void{
    this.users$ = this.facade.users$();
    this.facade.getAllUsers();
  }
}
