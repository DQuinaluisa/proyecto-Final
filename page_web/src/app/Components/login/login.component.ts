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
  role : any;
  type : any;
  createUser : boolean = true;
  createProduct : boolean = true;
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
      this.role = data["userFound"]
      localStorage.setItem("user", this.user.username)
      localStorage.setItem("token", this.token)
      this.type = this.role.roles[0]
      localStorage.setItem("role", this.type.name)
    //  console.log( this.role.roles)

      console.log( this.type.name)
      if(this.type.name == "user"){
        console.log("Es ususario")
        this.createProduct = false
        this.createProduct = false
      }
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
