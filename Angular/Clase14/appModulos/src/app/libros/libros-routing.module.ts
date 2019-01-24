import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';

const routes: Routes = [
  {path: "", children:[
    {path: "", component: ListadoLibrosComponent},
    {path: "edicion", component: EdicionLibroComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LibrosRoutingModule { }
