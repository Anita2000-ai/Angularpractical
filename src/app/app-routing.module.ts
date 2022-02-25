import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteTableComponent } from './delete-table/delete-table.component';
import { DetailViewComponent } from './detailview/detailview.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'users-table',
        component: UsersTableComponent,
      },

      {
        path: 'detail-view/:id',
        component: DetailViewComponent,
      },

      {
        path: 'add-user',
        component: AddUserComponent,
      },


      {
        path: 'edit-table/:id',
        component: EditTableComponent,
      },

      {
        path: 'delete-table',
        component: DeleteTableComponent,
      },

    ]
  },

  {
    path: '**', component: PageNotFoundComponent //wild card routing
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
