import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit {

  @ViewChild("texto") el: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent(this.el.nativeElement,"input")
      .pipe(
        debounceTime(500),
        map((e:any) => e.target.value),
        distinctUntilChanged()
      )
      .subscribe(
        resultado => console.log(resultado)
      )
  }

}
