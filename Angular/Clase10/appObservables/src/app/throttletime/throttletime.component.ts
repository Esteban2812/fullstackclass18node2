import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from "rxjs/operators"

@Component({
  selector: 'app-throttletime',
  templateUrl: './throttletime.component.html',
  styleUrls: ['./throttletime.component.css']
})
export class ThrottletimeComponent implements OnInit {

  @ViewChild("boton") el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    /* const boton = document.querySelector(".b1")

    let cuenta = 0
    const lapso = 1000
    let ultimo = Date.now() - lapso

    boton.addEventListener("click", e => {
      if(Date.now() - ultimo > lapso) {
        console.log(e)
        ultimo = Date.now()
      }
      
    }) */

    fromEvent(this.el.nativeElement, "click")
      .pipe(
        throttleTime(1000)
      )
      .subscribe(
        e => console.log(e)
      )





  }

}
