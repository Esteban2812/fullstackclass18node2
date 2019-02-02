import fs = require("fs")

const lector = fs.createReadStream("./lectura.txt", {encoding: "utf8"})

const escritor = fs.createWriteStream("./escritura.txt", {encoding: "utf8"})

lector.on("data", chunck => {
    console.log("chunck", chunck)
    escritor.write(chunck)
})

lector.on("end", () => console.log("fin de streaming"))
lector.on("error", error => console.log(error))