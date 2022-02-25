import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

    userForm: FormGroup=new FormGroup({});
  constructor(
    private form: FormBuilder
  ) {

   }
   
   onAddUser(){

  }

  ngOnInit(): void {
    this.userForm = this.form.group({
      userFirstName: [undefined, Validators.required],
      Email: [undefined, Validators.required],
      Password:[undefined,Validators.required],
      MobileNumber:[undefined,Validators.required]

    });
  
  }

}
