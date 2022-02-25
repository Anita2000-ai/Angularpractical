import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersTableComponent } from './users-table/users-table.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { DeleteTableComponent } from './delete-table/delete-table.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';
import { DetailViewComponent } from './detailview/detailview.component';
import { DetailsViewComponent } from './details-view/details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailViewComponent,
    UsersTableComponent,
    EditTableComponent,
    DeleteTableComponent,
    AddUserComponent,
    DetailViewComponent,
    PageNotFoundComponent,
    TableComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
