import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  @ViewChild("texto") el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent(this.el.nativeElement,"input")
      .pipe(
        debounceTime(500),
        pluck("target", "value"),
        //map((e:any) => e.target.value),
        distinctUntilChanged()
      )
      .subscribe(
        resultado => console.log(resultado)
      )
  }

}
