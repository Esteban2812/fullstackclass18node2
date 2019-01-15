import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  @ViewChild("texto") el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    fromEvent(this.el.nativeElement, "input")
      .pipe(
        switchMap(evento => interval(1000))
      )
      .subscribe(
        respuesta => console.log(respuesta)
      )
  }

}
