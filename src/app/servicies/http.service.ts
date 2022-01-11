import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  findAll(){
    return this.http.get<Students[]>('api/v1/users')
  }
  findById(id:number){
    return this.http.get<Students>('api/v1/users/$(id)')
  }
  save(student:Students){
    return this.http.post('api/v1/users', Students)
  }
  delete(id:number){
    return this.http.delete('api/v1/users/$(id)')
  }
}
