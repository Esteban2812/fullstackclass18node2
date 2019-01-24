import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReducidorPipe } from './reducidor.pipe';

import { AppRouting } from './app.routing.module';
import { LibrosModule } from './libros/libros.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialesModule } from './editoriales/editoriales.module';
import { NucleoModule } from './nucleo/nucleo.module';

@NgModule({
  declarations: [
    AppComponent,
    ReducidorPipe
  ],
  imports: [
    BrowserModule,
    AppRouting,
    LibrosModule,
    AutoresModule,
    EditorialesModule,
    NucleoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
