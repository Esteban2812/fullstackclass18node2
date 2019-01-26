import { ReducidorPipe } from './reducidor.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ReducidorPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[ReducidorPipe]
})
export class CompartidoModule { }
