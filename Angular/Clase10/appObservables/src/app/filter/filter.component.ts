import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(1000)
      .pipe(
        filter(e => e % 3 == 0)
      )
      .subscribe(
        resultado => console.log(resultado)
      )

  }

}
