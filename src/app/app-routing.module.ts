import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteTableComponent } from './delete-table/delete-table.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'users',
    component:UsersComponent
  },
{
  path:'users-table',
  component:UsersTableComponent
},

{ 
  path:'edit-table',
  component:EditTableComponent
},

{
  path:'delete-table',
  component:DeleteTableComponent
},

{
  path:'add-user',
  component:AddUserComponent
},
{
  path:'detail-view',
  component:DetailViewComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
