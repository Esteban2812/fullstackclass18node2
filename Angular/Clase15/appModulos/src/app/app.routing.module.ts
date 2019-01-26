import { AutenticacionGuard } from './servicios/autenticacion.guard';
import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common';
import { RouterModule, Route, PreloadAllModules } from "@angular/router"

const rutas: Route[] = [
  {path: "libros", loadChildren: "./libros/libros.module#LibrosModule", canLoad: [AutenticacionGuard]},
  {path: "autores", loadChildren: "./autores/autores.module#AutoresModule"},
  {path: "editoriales", loadChildren: "./editoriales/editoriales.module#EditorialesModule"}
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRouting {}