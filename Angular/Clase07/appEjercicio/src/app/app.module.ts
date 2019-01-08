import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RouterModule, Route} from '@angular/router'
import { AutenticadoService } from './autenticado.service';

const paths = [
  {path: "", component: LoginComponent},
  {path: "listado", component: ListadoComponent, resolve: {
    datos: AutenticadoService
  }},
  {path: "nuevo", component: NuevoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    LoginComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
