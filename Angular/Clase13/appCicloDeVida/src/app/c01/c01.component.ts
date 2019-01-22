import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-c01',
  templateUrl: './c01.component.html',
  styleUrls: ['./c01.component.css']
})
export class C01Component implements OnInit {

  suscripcion: Subscription

  constructor() { }

  ngOnInit() {
    this.suscripcion = interval(1000)
      .subscribe(
        numero => console.log(numero)
      )
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe()
  }

}
