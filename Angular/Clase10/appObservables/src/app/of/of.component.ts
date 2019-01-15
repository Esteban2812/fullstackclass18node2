import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    of({mujeres:20, hombres:30}, {mujeres:10, hombres:5}, {mujeres:50, hombres:40}, {mujeres:2, hombres:25})
      .pipe(
        scan((total:any, valor:any) => {
          if(total.mujeres) {
            total.mujeres += valor.mujeres
            total.hombres += valor.hombres
          } else {
            total.mujeres = valor.mujeres
            total.hombres = valor.hombres
          }

          return total
        }, {})
      )
      .subscribe(
        respuesta => console.log(respuesta)
      )
    //of(1, 2, 3, 4, 5)
    /* of("Angular", "Node", "Mongo", "Node", "Angular", "Mongo", "Node")
      .pipe(
        reduce((total:any, valor)=> {
          if(total[valor]) {
            total[valor]++
          }
          else {
            total[valor]=1
          }
          return total
        }, {}) 
        //scan((total, valor)=> total+valor, 0)
      )
      .subscribe(
        data => console.log(data)
      )*/

  }

}
