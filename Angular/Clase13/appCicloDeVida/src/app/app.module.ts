import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EstadoUsuarioComponent } from './estado-usuario/estado-usuario.component';
import { C01Component } from './c01/c01.component';
import { C02Component } from './c02/c02.component';

import { RouterModule, Route } from "@angular/router"

const rutas: Array<Route> = [
  {path: "", component: C01Component},
  {path: "c2", component: C02Component}
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EstadoUsuarioComponent,
    C01Component,
    C02Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
