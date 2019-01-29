import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EdicionComponent } from '../edicion/edicion.component';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  abrirPopup(){
    const ref: MatDialogRef<EdicionComponent> = this.dialog.open(EdicionComponent, {
      panelClass: "contenedor-dialog",
      width: "400px",
      disableClose: true
    })

    ref.afterClosed().subscribe(
      results => {
        if(!results) return false

        console.log(results)
      }
    )
  }

}
