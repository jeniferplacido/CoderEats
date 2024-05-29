const Usuario = require('../models/Usuario');

class UsuarioDAO {

  getUsuarios = async () => {
            try{
                let usuarios = await Usuario.find();
                return usuarios;
            }
            catch(error){
                console.log(error);
            }
        }

            getUsuarioById = async (id) => {
                try{
                    let usuario = await Usuario.findOne({_id: id});
                    return usuario;
                }catch(error){
                    console.log(error);
                    return null;
                }
            }

            saveUsuario = async (usuario) => {
                try{
                    let result = await Usuario.create(usuario);
                    return result
                }catch(error){
                    return null
                }
            }

            updateUsuario = async (id, usuario) => {
                try{
                    let result = await Usuario.updateOne({_id: id}, {$set: usuario});
                    return result
                }catch(error){
                    return null
                }
            }

        }

module.exports = UsuarioDAO