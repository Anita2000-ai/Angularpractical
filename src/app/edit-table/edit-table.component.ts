import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {
  editUser: FormGroup=new FormGroup({});

  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.editUser = this.form.group({
      userFirstName: [undefined, Validators.required],
      address: [undefined, Validators.required],
      age:[undefined,Validators.required],
    });
  }

  onEditUser(){
    
  }


}
