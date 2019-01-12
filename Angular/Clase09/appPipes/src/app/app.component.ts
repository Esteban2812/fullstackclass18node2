import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha = new Date()
  nombre = "Fullstack"

  textoABuscar = ""

  libros = [
    {autor: "Patrick Suskind", titulo: "El Perfume", anno:2000, sinopsis: "Narra la historia de un asesino que mataba mujeres para robarles su esencia y crear perfumes"},
    {autor: "José María Arguedas", titulo: "El Sexo", anno: 1980, sinopsis: "Novela basada en un transexual llamado 'Rosita'. Narra sus vivencias dentro de la cárcel llamada 'El Sexto'"},
    {autor: "Mario Vargas Llosa", titulo: "Pantaleon y las visitadoras", anno: 1975, sinopsis: "Describe el servicio de visitadoras creadas para la tropa ubicada en lugares fronterizos y alejados."},
    {autor: "Anónimo", titulo: "El lazarillo de Tormes", anno: 1600, sinopsis: "Narra las aventuras y las desdichas de un niño pobre cuya madre lo entrega a un amo para que lo cuide y alimente. El libro cuenta las anécdotas que pasó con 3 amos."}
  ]



}
