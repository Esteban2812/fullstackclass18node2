import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReducidorPipe } from './reducidor.pipe';
import { ReducidorPalabrasPipe } from './reducidor-palabras.pipe';
import { FiltroPipe } from './filtro.pipe';
import { FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    ReducidorPipe,
    ReducidorPalabrasPipe,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
