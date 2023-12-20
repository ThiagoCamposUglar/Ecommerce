import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDeparments(){
    return this.http.get<Department[]>(this.baseUrl + 'department')
  }

  getDeparment(id: number){
    return this.http.get<Department>(this.baseUrl + 'department/' + id)
  }

  update(deparment: Department){
    return this.http.put(this.baseUrl + 'department', deparment)
  }

  insert(deparment: Department){
    return this.http.post<Department>(this.baseUrl + 'department', deparment)
  }

  delete(id: number){
    return this.http.delete(this.baseUrl + 'department/' + id)
  }

}
