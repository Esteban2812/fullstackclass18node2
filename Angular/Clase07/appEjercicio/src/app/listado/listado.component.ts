import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    console.log("datos")
    console.log(this.activatedRouter.snapshot.data.datos)

    const datos = this.activatedRouter.snapshot.data.datos

    console.log("Locales", datos[0])
    console.log("Distritos", datos[1])
  }

}
