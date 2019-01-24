import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router"

const rutas: Route[] = [
  
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class AppRouting {}