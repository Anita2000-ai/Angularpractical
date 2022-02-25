import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  tableData = [
    {
      id: '001',
      name: 'Anita Khadka',
      address : 'Kapan',
      age : 21,
      class: '01'
    },
    {
      id: '002',
      name: 'Babita Kathayat',
      address : 'lasuntaar',
      age : 22,
      class: '02'

    },
    {
      id: '003',
      name: 'laxmi Bhattarai',
      address : 'Chabahil',
      age : 23,
      class: '03'

    },
    {
      id: '004',
      name: 'Aadip khadka',
      address : 'Gurung tol',
      age : 20,
      class: '04'

    },
  ];
  data: any;

  constructor(
    private router: Router) {
      
    }

  ngOnInit(): void {
  }
  
  
  onAddUser(){
    this.router.navigate(['/add-user'])
  }

  onEdit(){
    this.router.navigate(['/edit-table'])
  }

  onDelete(){
    this.router.navigate(['/delete-table'])
  }
 
  onView(){
    this.router.navigate(['/detail-view'])
  }

}

