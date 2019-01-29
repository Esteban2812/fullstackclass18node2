import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  grupo: FormGroup

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup(
      {
        correo: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
      }
    )
  }

  grabar(){
    
  }

}
