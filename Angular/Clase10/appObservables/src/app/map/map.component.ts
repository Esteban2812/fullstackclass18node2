import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild("boton") el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    fromEvent(this.el.nativeElement, "click")
      .pipe(
        throttleTime(1000),
        map((e: any) => e.clientX)
      )
      .subscribe(
        posicion => console.log(posicion)
      )
  }

}
