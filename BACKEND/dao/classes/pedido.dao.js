const Pedido = require('../models/Pedido');

class PedidoDAO {

  getPedidos = async () => {
            try{
                let pedidos = await Pedido.find();
                return pedidos;
            }
            catch(error){
                console.log(error);
            }
        }

            getPedidosById = async (id) => {
                try{
                    let pedidos = await Pedidos.findOne({_id: id});
                    return pedidos;
                }catch(error){
                    console.log(error);
                    return null;
                }
            }

            savePedidos = async (pedidos) => {
                try{
                    let result = await Pedido.create(pedidos);
                    return result
                }catch(error){
                    return null
                }
            }

            updatePedido = async (id, pedidos) => {
                try{
                    let result = await Pedido.updateOne({_id: id}, {$set: pedidos});
                    return result
                }catch(error){
                    return null
                }
            }

}
    

module.exports = PedidoDAO