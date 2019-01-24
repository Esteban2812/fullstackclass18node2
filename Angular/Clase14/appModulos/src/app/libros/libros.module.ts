import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';

@NgModule({
  declarations: [
    ListadoLibrosComponent,
    EdicionLibroComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
