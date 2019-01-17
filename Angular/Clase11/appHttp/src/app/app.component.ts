import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ICurso } from './cursos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: ICurso[] = []

  constructor(private cursosService: CursosService){}

  ngOnInit() {
    this.cursosService.listar()
      .subscribe(
        (data: ICurso[]) => this.cursos = data
      )
  }
}
