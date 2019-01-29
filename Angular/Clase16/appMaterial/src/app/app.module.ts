import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

import { RouterModule, Route } from "@angular/router"

const rutas: Route[] = [
  {path: "", component: HomeComponent},
  {path: "menu1", component: Item1Component},
  {path: "menu2", component: Item2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Item1Component,
    Item2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
