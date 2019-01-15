import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { ThrottletimeComponent } from './throttletime/throttletime.component';
import { MapComponent } from './map/map.component';
import { ObservadorComponent } from './observador/observador.component';
import { IntervalComponent } from './interval/interval.component';
import { FilterComponent } from './filter/filter.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { OfComponent } from './of/of.component';
import { PluckComponent } from './pluck/pluck.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

@NgModule({
  declarations: [
    AppComponent,
    FromeventComponent,
    ThrottletimeComponent,
    MapComponent,
    ObservadorComponent,
    IntervalComponent,
    FilterComponent,
    DebouncetimeComponent,
    OfComponent,
    PluckComponent,
    SwitchmapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
