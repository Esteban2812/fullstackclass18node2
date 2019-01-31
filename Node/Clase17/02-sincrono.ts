import fs = require("fs")

console.log("Inicio de lectura")

const contenido = fs.readFileSync("./lectura.txt", {encoding: "utf8"})

console.log(contenido)

console.log("Fin de lectura")