import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  usuario: string = "jperalta"

  datosUsuario = {edad: 30, sexo: "hombre"}
  contador=1

  _hora

  get Hora() {
    console.log("contador", this.contador++)
    return this._hora
  }

  constructor(){
    console.log("%c app - constructor", "color: red")
  }

  ngOnInit(){
    console.log("%c app - ngOnInit", "color: red")
   /*  setInterval(()=>{
      this._hora = Date.now()
    }, 1000) */
  }

  ngDoCheck(){
    console.log("%c app - ngDoCheck", "color: red")
  }

  cambiar(){
    this.usuario = "cbarco"
  }

  cambiarSexo(){
    this.datosUsuario.sexo = "mujer"
    //this.datosUsuario = {edad: 40, sexo: "mujer"}
  }

}
