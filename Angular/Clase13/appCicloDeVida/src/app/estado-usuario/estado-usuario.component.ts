import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-estado-usuario',
  templateUrl: './estado-usuario.component.html',
  styleUrls: ['./estado-usuario.component.css']
})
export class EstadoUsuarioComponent implements OnInit {

  @ContentChild("mensaje") mensaje: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log("%c estadoUsuario - ngAfterContentInit", "color: blue")
    this.mensaje.nativeElement.style="font-size:20px;font-style:italic"
  }

  cambiarEstilo(){
    this.mensaje.nativeElement.style="text-decoration:overline"
  }

  ngAfterContentChecked(){
    console.log("%c estadoUsuario - ngAfterContentChecked", "color: blue")
  }

}
