import fs = require("fs")

console.log("Inicio")

fs.readFile("./lectura.txt", {encoding: "utf8"}, (err, contenido) => {
  if(err) return console.log(err)

  console.log(contenido)
})

console.log("Fin")