import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username : any;
  email: any;
  password: any;
  roles : any;

  constructor(
    private serverAuth : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){

    let data = {
      "username" : this.username,
      "email": this.email,
      "password": this.password,
      "roles" : [this.roles]
    }

    this.serverAuth.signUp(data).subscribe(
      response => {

        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Creado con exito',
          text: 'Usuario Creado!',

        })
        window.setTimeout(function(){location.reload()},2000)
      }, error => {

       Swal.fire({
        icon: 'error',
        title: 'Oops!!!',
        text: 'No Tienes Permiso para Crear Usuarios!',

      })
      }
    )
}

refresh(){
  window.location.reload()

}


regresar() {
  this.router.navigate(['/products' ]);
}

}
