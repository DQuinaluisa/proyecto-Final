import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { MarketingComponent } from './Components/marketing/marketing.component';
import { ProduccionComponent } from './Components/produccion/produccion.component';
import { AppsComponent } from './Components/apps/apps.component';
import { ServicesComponent } from './Components/services/services.component';
import { ComerceComponent } from './Components/comerce/comerce.component';
import { DappsComponent } from './Components/dapps/dapps.component';
import { CoachingComponent } from './Components/coaching/coaching.component';
import { ArteComponent } from './Components/arte/arte.component';
import { TurismoComponent } from './Components/turismo/turismo.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { AliadosComponent } from './Components/aliados/aliados.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { NavComponent } from './Components/nav/nav.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProductsComponent } from './Components/products/products.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { TokenGuard } from './guards/token.guard';
const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'marketing', component:MarketingComponent},
  {path: 'produccion', component:ProduccionComponent},
  {path: 'apps', component:AppsComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'commerce', component:ComerceComponent},
  {path: 'dapps', component:DappsComponent},
  {path: 'coaching', component:CoachingComponent},
  {path: 'arte', component:ArteComponent},
  {path: 'turismo', component:TurismoComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'aliados', component:AliadosComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'prueba', component:PruebaComponent},
  {path: 'nav', component:NavComponent},
  {path: 'navbar', component:NavbarComponent},


  {
    path: "login",
    component: LoginComponent
  },


  {
    path: "registro",
    component : SignupComponent,
    canActivate : [TokenGuard]

  },

  {
    path: "products",
    component : ProductsComponent,
    canActivate : [TokenGuard]

  },

  {
    path: "edit-products/:id",
    component: EditProductComponent,
    canActivate : [TokenGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
