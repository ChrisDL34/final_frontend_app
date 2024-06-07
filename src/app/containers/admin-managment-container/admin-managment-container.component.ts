import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/models/users.model';
import { AdminManagementContainerFacade } from './admin-management-container.facade';
import { AdminManagmentComponent } from '../../ui/blocks/admin-managment/admin-managment.component';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-managment-container',
  standalone: true,
  imports: [AdminManagmentComponent,AsyncPipe],
  templateUrl: './admin-managment-container.component.html',

})
export class AdminManagmentContainerComponent implements OnInit, OnDestroy {
  public users$!: Observable<User[]>;
  public modalTitle:string ="";
  public modalMessage:string ="";
  public modalCloseButtonMessage:string ="";
  public modalConfirmButtonMessage:string| undefined =undefined;
  public modalIsShown:boolean =false;
  public modalContinueBehavior:(any)=>void | undefined = undefined;
  public modalContinueParams:any;

  constructor(
    private readonly facade: AdminManagementContainerFacade,
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

  executeUserDeletion=(userId:string):void=>{
    this.facade.deleteUser(userId).subscribe({
      next:()=>{
        this.modalCloseButtonMessage="OK";
        this.modalMessage="The user has been deleted";
        this.modalTitle="User deleted";
        this.modalConfirmButtonMessage=undefined;
        this.modalIsShown=true;
        this.facade.getAllUsers();
      },
      error:(e)=>{
        console.log(e);
        //TODO mostrar modal error
      }
    });
  }

  modalClose=():void=>{
    this.modalIsShown=false;
  }

  deleteUser=(userId:string):void=>{
    this.modalCloseButtonMessage="No";
    this.modalMessage="The user will be deleted, do you want to continue?";
    this.modalTitle="WARNING";
    this.modalConfirmButtonMessage="Yes";
    this.modalContinueParams=userId;
    this.modalIsShown=true;
    this.modalContinueBehavior=this.executeUserDeletion;

  }

  addUser=():void=>{
    this.router.navigate(['/add-user']);
  }

  buyBooks = (supplierId: string): void => {
    this.router.navigate(['/request-providers', supplierId]);
  }

  editUser=(user: User):void=>{
    this.facade.setSelectedUser(user);
    this.router.navigate(['/edit-user']);
  }
}