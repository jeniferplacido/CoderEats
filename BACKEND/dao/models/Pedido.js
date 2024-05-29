const mongoose = require('mongoose');


const pedidoSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    comercio: {type: mongoose.Schema.Types.ObjectId, ref: 'Comercio'},
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    produtos:[],
    precoTotal: Number

});

const Pedidos = mongoose.model('Pedidos', pedidoSchema);

module.exports = Pedidos