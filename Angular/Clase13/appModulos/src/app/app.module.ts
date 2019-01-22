import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { EdicionAutorComponent } from './edicion-autor/edicion-autor.component';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { EdicionEditorialComponent } from './edicion-editorial/edicion-editorial.component';
import { ReducidorPipe } from './reducidor.pipe';

import { RouterModule, Route} from "@angular/router"

const rutas: Route[] = [
  {path: "", component: LoginComponent},
  {path: "libros", children:[
    {path: "", component: ListadoLibrosComponent},
    {path: "edicion", component: EdicionLibroComponent}
  ]},
  {path: "autores", children: [
    {path: "", component: ListadoAutoresComponent},
    {path: "edicion", component: EdicionAutorComponent}
  ]},
  {path: "editoriales", children: [
    {path: "", component: ListadoEditorialesComponent},
    {path: "edicion", component: EdicionLibroComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabeceraComponent,
    ListadoLibrosComponent,
    EdicionLibroComponent,
    ListadoAutoresComponent,
    EdicionAutorComponent,
    ListadoEditorialesComponent,
    EdicionEditorialComponent,
    ReducidorPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
