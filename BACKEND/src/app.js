const express = require("express");
const connection = require("../config/db");

const app = express();
connection();


const usuarioRouter = require("./routes/usuario.router");
const comercioRouter = require("./routes/comercio.router");
const pedidoRouter = require("./routes/pedido.router");


app.use('/api/usuario', usuarioRouter);
app.use('/api/comercio', comercioRouter);
app.use('/api/pedido', pedidoRouter);








app.listen(8080, () => console.log("Servidor rodando na porta 8080"));