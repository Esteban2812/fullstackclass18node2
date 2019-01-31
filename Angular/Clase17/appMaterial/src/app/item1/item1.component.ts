import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { EdicionComponent } from '../edicion/edicion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  constructor(private dialog: MatDialog, private notificador: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  abrirPopup(){
    const ref: MatDialogRef<EdicionComponent> = this.dialog.open(EdicionComponent, {
      panelClass: "contenedor-dialog",
      width: "400px",
      disableClose: true,
      data: {
        titulo: "Nuevo"
      }
    })

    ref.afterClosed().subscribe(
      results => {
        if(!results) return false

        this.notificador.open("Registro insertado", null, {
          duration: 2000
        })

        console.log(results)
      }
    )
  }

  editPopup(){
    const ref: MatDialogRef<EdicionComponent> = this.dialog.open(EdicionComponent, {
      panelClass: "contenedor-dialog",
      width: "400px",
      disableClose: true,
      data: {
        id: 20,
        titulo: "Edición",
        valores: {nombre: "Juan", apellido: "Pérez"}
      }
    })

    ref.afterClosed().subscribe(
      results => {
        if(!results) return false

        const notify: MatSnackBarRef<SimpleSnackBar> = this.notificador.open("Registro modificado", null, {
          duration: 2000
        })

        notify.afterDismissed().subscribe(
          respuesta => this.router.navigate(["menu2"])
        )


        console.log(results)
      }
    )
  }

}
