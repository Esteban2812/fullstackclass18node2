import { Component } from '@angular/core';

FileList.prototype["forEach"] = function(callback) {
  [].forEach.call(this, callback)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appDirectivas';

  aplicarHover: boolean = false

  accion(valor: boolean) {
    this.aplicarHover = valor
  }

  archivosSeleccionados(archivos: FileList) {
    archivos["forEach"](archivo => {
      console.log(archivo)
    })
    //console.log(archivos)
  }
}
