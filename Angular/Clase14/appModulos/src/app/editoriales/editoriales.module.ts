import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialesRoutingModule } from './editoriales-routing.module';
import {
    ListadoEditorialesComponent
} from './listado-editoriales/listado-editoriales.component';
import { EdicionEditorialComponent } from './edicion-editorial/edicion-editorial.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    ListadoEditorialesComponent,
    EdicionEditorialComponent
  ],
  imports: [
    CommonModule,
    EditorialesRoutingModule,
    CompartidoModule
  ]
})
export class EditorialesModule { }
