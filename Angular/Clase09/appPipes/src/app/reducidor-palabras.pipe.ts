import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "reducidorPalabras"
})
export class ReducidorPalabrasPipe implements PipeTransform {
  transform(valor: string, longitud: number, texto: string){
    const palabras = valor.split(" ")
    if(palabras.length<=longitud) return valor
    
    return palabras.slice(0, longitud).join(" ") + " " + texto
  }
}