const mongoose = require('mongoose');


const comercioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    produtos:[]
})

const Comercio = mongoose.model('Comercio', comercioSchema);

module.exports = Comercio