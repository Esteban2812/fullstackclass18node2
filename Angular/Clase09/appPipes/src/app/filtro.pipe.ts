import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(valor:Array<any>, textoBuscado: string): any {
    const resultados = valor.filter(item => {
      return item.sinopsis.indexOf(textoBuscado)> -1
    })

    return resultados;
  }

}
