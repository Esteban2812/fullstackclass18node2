import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurso } from './cursos.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<ICurso[]>{
    return this.http.get<ICurso[]>("http://cursos.tibajodemanda.com/cursos")
  }

  insertar(){}

  actualizar(){}

  eliminar(){}
}
