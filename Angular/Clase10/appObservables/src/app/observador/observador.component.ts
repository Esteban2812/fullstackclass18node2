import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-observador',
  templateUrl: './observador.component.html',
  styleUrls: ['./observador.component.css']
})
export class ObservadorComponent implements OnInit {

  @ViewChild("boton") el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const observador = {
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log("end")
    }

    fromEvent(this.el.nativeElement, "click")
      .subscribe(observador)


  }

}
