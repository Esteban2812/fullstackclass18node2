import { AutenticadoService } from '../autenticado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AutenticadoService, private router: Router) { }

  ngOnInit() {
  }

  loguearse() {
    this.auth.login()
      .then(
        data => {
          sessionStorage.setItem("datosUsuario", JSON.stringify(data))
          this.router.navigate(["listado"])
        }
      )
  }

}
