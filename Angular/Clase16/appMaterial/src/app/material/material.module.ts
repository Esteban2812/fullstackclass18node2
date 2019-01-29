import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule} from "@angular/material"
import {FlexLayoutModule} from "@angular/flex-layout"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
