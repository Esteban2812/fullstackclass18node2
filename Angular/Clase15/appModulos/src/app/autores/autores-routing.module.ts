import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { EdicionAutorComponent } from './edicion-autor/edicion-autor.component';

const routes: Routes = [
  {path: "", children: [
    {path: "", component: ListadoAutoresComponent},
    {path: "edicion", component: EdicionAutorComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
