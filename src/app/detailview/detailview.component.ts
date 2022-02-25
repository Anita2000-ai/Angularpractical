import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailViewComponent implements OnInit {
  userDetails = {
    id: '001',
    name: 'Ram',
    address: 'Kathmandu',
    age: 25
  };
  constructor() { }

  ngOnInit(): void {
  }

}
