import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get<Customer[]>(this.baseUrl + 'users')
  }

  getCustomer(id: number){
    return this.http.get<Customer>(this.baseUrl + 'users/' + id);
  }

  updateCustomer(customer: Customer){
    return this.http.put(this.baseUrl + 'users', customer);
  }
}
