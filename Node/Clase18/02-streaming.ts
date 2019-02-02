import fs = require("fs")

const lector = fs.createReadStream("./lectura.txt", {encoding: "utf8"})

const escritor = fs.createWriteStream("./escritura.txt", {encoding: "utf8"})

lector.pipe(escritor)