import { IReceta } from "./receta.interface";
import { LogService } from "./log.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable({
	"providedIn": "root"
})
export class RecetaService implements Resolve<IReceta[]> {
	private recetas: Array<IReceta> = []

	resolve(): IReceta[] | Promise<IReceta[]> {
		const promesaReceta: Promise<IReceta[]> = new Promise((res, rej) => {
			setTimeout(() => {
				res([
					{ titulo: "Causa norteña", preparacion: "Sancochar la papa", ingredientes: "papa, aji, atún", tiempo: 20 }
				])
			}, 7000)
		})

		return promesaReceta
	}

	constructor(private logService: LogService) { }

	agregarReceta(receta: IReceta) {
		this.recetas.push(receta)
		this.logService.escribir("nueva receta", "info")
	}

	listarRecetas() {
		this.logService.escribir("listar recetas", "error")
		return this.recetas
	}
}