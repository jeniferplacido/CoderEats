const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true }, 
    email: {type: String, required: true, unique: true},
    role: {type: String, required: true},

    pedidos: {type: mongoose.Schema.Types.ObjectId, ref: 'Pedidos'}
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;