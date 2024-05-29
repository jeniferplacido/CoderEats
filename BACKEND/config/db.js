const mongoose = require('mongoose')


const connection = async () => {
    try{
        await mongoose.connect('mongodb+srv://eats:eats@codereats.2kgemzq.mongodb.net/')
        console.log('Conectado com sucesso ao MongoDB')
    } catch(error){
        console.error('Erro ao conectar ao MongoDB', error)
        process.exit(1)
    }
}

module.exports = connection