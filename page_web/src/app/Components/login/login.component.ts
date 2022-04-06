import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService  } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : any;
  password : any;
  token : any;
  user : any;
  constructor(
    private serverAuth : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    let data = {
      "email" : this.email,
      "password" : this.password
    }


    this.serverAuth.login(data).subscribe((data : any) => {
      /* Una vez que el usario ingresa
        nosotros en la data guardaremos en la propiedad
        localStorage el token y el userFound
        estos nos servira para poder ingresar a las otras pantallas como recuperar
        el nombre del usuario que ingreso
      */
      this.token = data["token"]
      this.user = data["userFound"]
      localStorage.setItem("user", this.user.username)
      localStorage.setItem("token", this.token)
     console.log( localStorage.getItem("user"))
      Swal.fire({
        icon: 'success',
        title: 'Bienvenidos!!!',
        text: 'Un gusto volverte a ver!',

      })
      this.router.navigate(['/products', ]);
    }, error => {
      Swal.fire({
            icon: 'error',
            title: 'Oops!!!',
            text: 'No se puede Ingresar!',

          })
    })
  }

}
