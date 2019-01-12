import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appArrastre]'
})
export class ArrastreDirective {
  @Output() onDentroAfuera = new EventEmitter<boolean>()
  @Output() onArchivosSeleccionados = new EventEmitter<FileList>()
  constructor() { }

  @HostListener("dragover", ["$event"]) encima($event) {
    $event.preventDefault()
    this.onDentroAfuera.emit(true)
  }

  @HostListener("dragleave", ["$event"]) fuera($event) {
    $event.preventDefault()
    this.onDentroAfuera.emit(false)
  }

  @HostListener("drop", ["$event"]) seleccion($event) {
    $event.preventDefault()
    this.onArchivosSeleccionados.emit($event.dataTransfer.files)
    this.onDentroAfuera.emit(false)
    //console.log($event.dataTransfer.files)
  }

}
