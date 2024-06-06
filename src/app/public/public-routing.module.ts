import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../ui/layouts/layout-main/layout-main.component';
import { AdminManagmentContainerComponent } from '../containers/admin-managment-container/admin-managment-container.component';
import { RequestProviderContainerComponent } from '../containers/request-provider-container/request-provider-container.component';
import { AddUserContainerComponent } from '../containers/add-user-container/add-user-container.component';
import { EditUserContainerComponent } from '../containers/edit-user-container/edit-user-container.component';
import { UserContainerComponent } from '../containers/user-container/user-container.component';

const routes: Routes = [

{
  path:'admin-managment',
  component: LayoutMainComponent,
  children:[
    {
      path:'',
       component: UserContainerComponent,
       outlet: 'main'
    }
  ],
},
{
  path:'request-providers',
  component: LayoutMainComponent,
  children:[
    {
      path:'',
       component: RequestProviderContainerComponent,
       outlet: 'main'
    }
  ],
},
{
  path:'add-user',
  component: LayoutMainComponent,
  children:[
    {
      path:'',
       component: AddUserContainerComponent,
       outlet: 'main'
    }
  ],
},
{
  path:'edit-user',
  component: LayoutMainComponent,
  children:[
    {
      path:'',
       component: EditUserContainerComponent,
       outlet: 'main'
    }
  ],
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}

