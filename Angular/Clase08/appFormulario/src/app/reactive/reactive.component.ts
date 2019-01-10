import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  grupo: FormGroup

  dominiosValidos: string[] = ["miempresa.com", "area1.miempresa.com"]

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email, this.validadorCorreosEmpresariales.bind(this)]),
      contrasena: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
  }

  validadorCorreosEmpresariales(control: FormControl): { [p: string]: boolean } {
    if(!control || !control.value) return null

    const correo = control.value
    const dominioAVerificar = correo.split("@")[1].toLowerCase()

    let encontrado = false

    this.dominiosValidos.forEach(dominio => {
      if(dominio==dominioAVerificar) encontrado = true
    })

    if(encontrado) {
      return null
    } else {
      return {correoInvalido: true}
    }

  }

  cargarDatos() {
    this.grupo.setValue({
      nombre: "Alissa Milano",
      correo: "alissa.milano@tresxtres.com",
      contrasena: "1234567"
    })
  }

  cargarParcial() {
    this.grupo.patchValue({
      correo: "prueba@correo.com",
      contrasena: "123"
    })
  }

  grabar() {
    const datos = this.grupo.getRawValue()
    console.log(datos)
  }
}
