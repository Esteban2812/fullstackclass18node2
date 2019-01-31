import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EdicionComponent implements OnInit {

  grupo: FormGroup
  titulo: string

  constructor(public dialogRef: MatDialogRef<EdicionComponent>, @Inject(MAT_DIALOG_DATA) public datos: any) { }

  ngOnInit() {
    const valoresRecibidos = this.datos.valores

    if(valoresRecibidos) {
      this.grupo = new FormGroup({
        id: new FormControl(valoresRecibidos.id),
        nombre: new FormControl(valoresRecibidos.nombre, Validators.required),
        apellido: new FormControl(valoresRecibidos.apellido, Validators.required),
      })
    } else {
      this.grupo = new FormGroup({
        id: new FormControl(),
        nombre: new FormControl(null, Validators.required),
        apellido: new FormControl(null, Validators.required),
      })
    }


    this.titulo = this.datos.titulo


  }

  cerrar(){
    this.dialogRef.close(this.grupo.getRawValue())
  }

}
