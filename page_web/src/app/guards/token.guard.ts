import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor ( private router : Router ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

         /* Una vez que recuperamos el token podemos
         preguntar si a la pantalla que vamos a ingresar tiene el token* */
      const auth = localStorage.getItem("token");
      if(auth == null){
        Swal.fire({
          icon: 'error',
          title: 'Oops!!!',
          text: 'No Estas Logeado!',

        })
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }

}
