import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "reducidor"
})
export class ReducidorPipe implements PipeTransform {
  transform(valor: string, longitud: number, texto: string){
    if(valor.length<=longitud) return valor
    
    return valor.substring(0, longitud) + " " + texto
  }
}