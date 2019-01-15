import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(1000)
      .pipe(
        throttleTime(2000),
        map(e => e*3)
      )
      .subscribe(
        data => console.log(data)
      )
  }

}
