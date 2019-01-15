import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit {

  @ViewChild("boton") el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* const boton = document.querySelector("button")

    boton.addEventListener("click", e => {
      console.log(e)
    }) */

    fromEvent(this.el.nativeElement, "click")
      .subscribe(
        e => console.log(e)
      )

  }

}
