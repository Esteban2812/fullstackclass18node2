import { Component, OnInit, Input, SimpleChanges, ContentChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioComponent implements OnInit {

  @Input() nombreUsuario: string = "shidalgo"

  @Input() datos:any = {}

  valorSexoOriginal


  constructor(private change: ChangeDetectorRef) {
    console.log("%c usuario - constructor", "color: green")
  }

  ngOnChanges(cambios: SimpleChanges) {
    console.log("%c usuario - ngOnChanges", "color: green")
    console.log(cambios)
  }

  ngOnInit() {
    this.valorSexoOriginal = this.datos.sexo
    console.log("%c app - ngOnInit", "color: green")
  }

  ngDoCheck(){
    //console.log(this.datos)
    if(this.datos.sexo != this.valorSexoOriginal) {
      this.change.markForCheck()
    }
    console.log("%c app - ngDoCheck", "color: green")
  }




}
