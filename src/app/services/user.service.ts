import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrlEndPoint:string='users';
  baseUrl:string='environment.baseUrl';

  constructor(
   private httpClient:HttpClient
  ) { }

  addUsers(data:any){
    return this.httpClient.post<any>(this.baseUrl.concat(this.apiUrlEndPoint),data); 
  }
}
