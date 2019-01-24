import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialesRoutingModule } from './editoriales-routing.module';
import {
    ListadoEditorialesComponent
} from './listado-editoriales/listado-editoriales.component';
import { EdicionEditorialComponent } from './edicion-editorial/edicion-editorial.component';

@NgModule({
  declarations: [
    ListadoEditorialesComponent,
    EdicionEditorialComponent
  ],
  imports: [
    CommonModule,
    EditorialesRoutingModule
  ]
})
export class EditorialesModule { }
