import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
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
import { NguCarouselModule } from '@ngu/carousel';
import { NavComponent } from './Components/nav/nav.component';
import { ChatComponent} from './Components/chat/chat.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './Components/products/products.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InicioComponent,
    MarketingComponent,
    ProduccionComponent,
    AppsComponent,
    ServicesComponent,
    ComerceComponent,
    DappsComponent,
    CoachingComponent,
    ArteComponent,
    TurismoComponent,
    NosotrosComponent,
    AliadosComponent,
    ExperienciaComponent,
    PruebaComponent,
    NavComponent,
    ChatComponent,
    ProductsComponent,
    SignupComponent,
    LoginComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatPaginatorModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NguCarouselModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    NoopAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
