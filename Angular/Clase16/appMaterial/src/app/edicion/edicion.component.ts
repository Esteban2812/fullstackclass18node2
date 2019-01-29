import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EdicionComponent implements OnInit {

  grupo: FormGroup

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
    })
  }

}
