console.log("mensaje 2")


//Importaciones
import express = require("express")
import {Request, Response } from "express"

//declaraciones

const app = express()


//Rutas
app.get("/",(req: Request,res: Response) => {
    //es como si tuvieramos un mini manejo para rutas / con el metodo get
    res
        .status(200)
        .type("text/html")
        .send("<h1>Home</h1>")
}
)

//loque se a van ejecutar es una funcion de callback, tiene 2 parametros


app.get("/usuarios", (req:Request,res:Response) => {
    const lista =[
        {id: 100,usuario: "usuario1"}
]
    res
        .json(lista)
})

app.get("/redireccion", (req: Request, res: Response)


app.get("\descargr", ( req: Request, res: Response) =>
{
    res.sendFile(__dirname + "/memoria.pdf")
    res.download(__dirname + "/memoria.pdf")
} )

//si se desea editar, la ruta que va a tener un parametro variable
app.post("/usuarios/edicion/:id", ( req: Request, res: Response) =>
{

    //yo quiero editar, voy a hacer una consulta ala base dedatos, lo que significa que hay que leer el id
    const id = req.params.id
    res.send(id)
    
})

app.listen(4000, ()=>console.log("servidor ejecutandose en el pueerto 4000"))

