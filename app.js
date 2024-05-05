import express from "express";

import connectingToDb from "./helpers.js"

const app = express()

app.get("/", (req, res) => {
    res.send(" Primera respuesta!");
});

await connectingToDb();

app.listen(3000, () => {
    console.log("Servicio iniciado en puerto 3000 via http://localhost:3000")
});