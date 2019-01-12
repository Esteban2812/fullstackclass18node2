import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("f") formulario: NgForm
  
  grabar() {
    if(this.formulario.valid) {
      alert("FORMULARIO VÁLIDO")
    } else {
      alert("FORMULARIO INVÁLIDO")
    }
    console.log(this.formulario)
  }

  cargarDatos() {
    this.formulario.setValue({
      nombre: "Alissa Milano",
      correo: "alissa.milano@tresxtres.com",
      contrasena: "1234567"
    })
  }

  cargarParcial() {
    this.formulario.form.patchValue({
      correo: "prueba@correo.com",
      contrasena: "123"
    })
/*     this.formulario.setValue({
      correo: "prueba@correo.com",
      contrasena: "123"
    }) */
  }

}
