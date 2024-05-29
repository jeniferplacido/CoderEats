const Comercio = require('../models/Comercio');

class ComercioDAO {

  getComercios = async () => {
            try{
                let comercios = await Comercio.find();
                return comercios;
            }
            catch(error){
                console.log(error);
            }
        }

            getComercioById = async (id) => {
                try{
                    let comercios = await Comercios.findOne({_id: id});
                    return comercios;
                }catch(error){
                    console.log(error);
                    return null;
                }
            }

            saveComercio = async (comercio) => {
                try{
                    let result = await Comercio.create(comercio);
                    return result
                }catch(error){
                    return null
                }
            }

            updateComercio = async (id, comercio) => {
                try{
                    let result = await Comercio.updateOne({_id: id}, {$set: comercio});
                    return result
                }catch(error){
                    return null
                }
            }

}
    

module.exports = ComercioDAO