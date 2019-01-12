import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicaDirective } from './basica.directive';
import { ArrastreDirective } from './arrastre.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicaDirective,
    ArrastreDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
