import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoService implements Resolve<any> {

  constructor() { }

  resolve(): any | Promise<any> {
    const promesaLocales = new Promise((res, rej) => {
      setTimeout(()=>{
        res({
          status:200,
          results: [
            {local: "Primavera", cantidad: 10},
            {local: "San Miguel", cantidad: 14},
            {local: "Brasil", cantidad: 8}
          ]
        })
      }, 3000)
    })

    const promesaDistritos = new Promise((res, rej)=> {
      setTimeout(()=> {
        res({
          status: 200,
          results: [
            {distrito: "San Miguel"},
            {distrito: "Surquillo"},
            {distrito: "Breña"}
          ]
        })
      }, 4000)
    })

    return Promise.all([promesaLocales, promesaDistritos])

  }

  login():Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(()=>{
        res({
          status: 200,
          results: {
            nombre: "Pedro",
            accessToken: "xkxkxkakasd.kdkdkdkd.fjkd",
            refreshToken: "pk3348#kdkadaaa@@@$$kddk"
          }
        })
      }, 2000)
    })
  }
}
