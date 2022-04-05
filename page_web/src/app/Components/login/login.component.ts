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
    // if(data){
    //   let data = {

    //     "email": null,
    //     "password": null
    //   }
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops!!!',
    //     text: 'No se puede Ingresar!',

    //   })
    // }

    this.serverAuth.login(data).subscribe((data : any) => {

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
