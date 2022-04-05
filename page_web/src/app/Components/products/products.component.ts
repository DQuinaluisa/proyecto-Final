import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '../../models/product';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  user : any;
  name : any;
  description : any;
  price : any;
  products :  Product[];
  pageSize = 5;
  desde : number = 0;
  hasta : number = 5;
  constructor(
    private serverAuth : AuthService,
    private router : Router
  ) {
    this.products = [];

   }

  ngOnInit(): void {
    this.getProducts();
    this.user = localStorage.getItem("user")
    console.log(this.user)
  }



  createProduct(){
    let data = {
      "name" : this.name,
      "description" : this.description,
      "price" : this.price
    }
    this.serverAuth.createProduct(data).subscribe(response => {
      Swal.fire({
        icon: 'success',
        title: 'Producto Creado!!!',
        text: 'Producto Creado Exitosamente!',

      })
      window.setTimeout(function(){location.reload()},2000)
    }, error => {
      Swal.fire({
            icon: 'error',
            title: 'Oops!!!',
            text: 'No Tienes permisos para crear!',

          })
    })
  }



  cambiarpagina(e:PageEvent ){
    console.log(e)
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  getProducts(){
    this.serverAuth.getProducts().subscribe((data : any) => {

      this.products = data
      console.log(this.products)
    })
  }


  deleteProduct(id : any){
    Swal.fire({
      title: 'Estas Seguro?',
      text: "No podrás revertir esto.!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar producto!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serverAuth.deleteProducts(id).subscribe(response => {
            console.log(response)
        }, error => {
          Swal.fire(
            'Ooops!',
            'No tienes permisos para Eliminar.',
            'error'
          )
        })
        Swal.fire(
          'Eliminado!',
          'Producto Eliminado con Exito.',
          'success'
        )
        window.setTimeout(function(){location.reload()},2000)
      }
    })

  }


  selectProduct(id : any) {
    this.router.navigate(['/edit-products', id]);
  }


newUser() {
  this.router.navigate(['/registro' ]);
}

inico() {
  this.router.navigate(['/inicio' ]);
}

  salir(){
    localStorage.getItem("token")
    localStorage.clear()
    Swal.fire(
      'Adios!',
      'Vuelve Pronto.',
      'success'
    )
    this.router.navigate(['/login']);
  }



}
