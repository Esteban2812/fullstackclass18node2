import { Component } from '@angular/core';
import { Subject, merge, interval, of } from 'rxjs';
import { switchMap} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obsPagina: Subject<number> = new Subject<number>()
  obsOrdenamiento: Subject<string> = new Subject<string>()

  pagina: number = 1
  ordenamiento: string = "nombre"
  resultados: Array<any> = []

  cambioPagina() {
    //console.log("página", this.pagina)
    this.obsPagina.next(this.pagina)
  }

  cambioOrdenamiento(){
    //console.log("ordenamiento", this.ordenamiento)
    this.obsOrdenamiento.next(this.ordenamiento)
  }

  ngOnInit(){
    merge(this.obsPagina, this.obsOrdenamiento)
      .pipe(
        switchMap(()=> {
          const personas = [
            {nombre: "Sergio", sexo: "Hombre"},
            {nombre: "Kelly", sexo: "Mujer"},
            {nombre: "Marjorie", sexo: "Mujer"},
            {nombre: "Javier", sexo: "Hombre"},
            {nombre: "Clarisa", sexo: "Mujer"},
            {nombre: "Evelyn", sexo: "Mujer"},
            {nombre: "Alejandro", sexo: "Hombre"},
            {nombre: "Anthony", sexo: "Hombre"},
            {nombre: "Brenda", sexo: "Mujer"}
          ]

          return of(
            personas
              .sort((a, b) =>  a[this.ordenamiento]>b[this.ordenamiento] ? 1 : -1)
              .slice((this.pagina-1)*4, (this.pagina-1)*4 + 4)
          )

        })
      )
      .subscribe(
        data => this.resultados = data
      )
  }
}
