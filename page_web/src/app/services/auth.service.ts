import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { User } from '../models/user';
import Swal from 'sweetalert2';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api'
  constructor(
    private http : HttpClient
  ) { }

  signUp(data : any): Observable<User>{
    const token = localStorage.getItem("token")

    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-access-token' : `${token}`
     })

    return this.http.post<User>(`${this.url}/user`, data, {headers : headers})



  }

  login(data : any): Observable<User>{
    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
     })
     return this.http.post<User>(`${this.url}/auth/signin`, data, {headers : headers})
  }

  createProduct(data : any): Observable<Object>{
    const token = localStorage.getItem("token")

    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-access-token' : `${token}`
     })
     return this.http.post<Object>(`${this.url}/products`, data, {headers : headers})
  }

  getProducts(): Observable<Product[]> {
    const token = localStorage.getItem("token")


    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-access-token' : `${token}`
     })
     return this.http.get<Product[]>(`${this.url}/products`, {headers : headers})
  }

  deleteProducts(id : string) :Observable<Product> {
    const token = localStorage.getItem("token")

    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-access-token' : `${token}`
     })
     return this.http.delete<Product>(`${this.url}/products/${id}`, {headers : headers})
  }

  getProductById(id : string) :Observable<Product>{
    const token = localStorage.getItem("token")

    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-access-token' : `${token}`
     })
     return this.http.get<Product>(`${this.url}/products/${id}`, {headers : headers})
  }

  updateProduct(id : string, data : any) :Observable<Product> {
    const token = localStorage.getItem("token")

    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-access-token' : `${token}`
     })
     return this.http.put<Product>(`${this.url}/products/${id}`, data, {headers : headers})
  }


  getUser(id : string) : Observable<User> {
    const token = localStorage.getItem("token")

    const headers = new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'x-access-token' : `${token}`
     })
     return this.http.put<User>(`${this.url}/user/${id}`, {headers : headers})
  }


}
