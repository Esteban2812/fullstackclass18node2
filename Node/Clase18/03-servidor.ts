import http = require("http")
import fs = require("fs")

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{
  //res.setHeader("content-type", "text/plain")
  //res.setHeader("content-type", "text/html")
  //res.setHeader("content-type", "application/pdf")
  res.setHeader("content-type", "application/json")
  res.statusCode = 200

  const lista = [
    {id: 100, usuario: "usuario 1"},
    {id: 200, usuario: "usuario 2"},
    {id: 300, usuario: "usuario 3"},
    {id: 400, usuario: "usuario 4"},
    {id: 500, usuario: "usuario 5"},
  ]

  res.end(JSON.stringify(lista))

  //const lector = fs.createReadStream("./memoria.pdf")
  //lector.pipe(res)

  //res.writeHead(200, {"content-type": "text/plain"})
  //res.write("<strong>Esta es una respuesta del servidor</strong><br>")
  //res.end("Otra línea enviada desde el servidor")
  //res.end()
})

servidor.listen(4000, ()=>console.log("Servidor ejecutándose en el puerto 4000"))