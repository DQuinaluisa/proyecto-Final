import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id : any;
  product : any
  name : any;
  description : any;
  price : any;
  constructor(
    private activeRouter : ActivatedRoute,
    private authServer : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id)
      this.authServer.getProductById(this.id).subscribe(
        (data : any ) => {
          this.product = data
          console.log(this.product)
        }
      )
    })
  }

  updateProduct(){
    this.authServer.updateProduct(this.id, this.product).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          icon: 'warning',
          title: 'Producto Actualizado!!!',
          text: 'Producto Actualizado Correctamente!',

        })
      }, error => {
        Swal.fire({
              icon: 'error',
              title: 'Oops!!!',
              text: 'No Tienes Permisos para Actualizar!',

            })
      })
  }


  regresar() {
    this.router.navigate(['/products', ]);
  }

}
