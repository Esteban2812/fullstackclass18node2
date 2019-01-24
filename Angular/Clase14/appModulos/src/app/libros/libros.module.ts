import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { LibrosService } from './libros.service';
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    ListadoLibrosComponent,
    EdicionLibroComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    CompartidoModule,
    ReactiveFormsModule
  ],
  providers: [LibrosService]
})
export class LibrosModule { }
