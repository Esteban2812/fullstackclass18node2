import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import {
    EdicionAutorComponent
} from './edicion-autor/edicion-autor.component';


@NgModule({
  declarations: [
    ListadoAutoresComponent,
    EdicionAutorComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
