const Pedido = require('../../dao/models/Pedido');
const Comercio = require('../../dao/models/Comercio');
const Usuario = require('../../dao/models/Usuario');



const getPedidos = async (req, res) => {
    let result = await Pedido.find();
    res.send({status:"sucess", result:result});
}

const getPedidosById = async (req, res) => {
    let id = req.params.id;
    let result = await Pedido.findById(id);
    res.send({status:"sucess", result:result});
}

const criarPedidos = async (req, res) => {
    const {usuario, comercio, produtos} = req.body;
    const resultUsuario = await Usuario.findById(usuario);
    const resultComercio = await Comercio.findById(comercio);
    let pedidoAtualizado = resultComercio.produtos.filter(produto => produtos.includes(produto._id));
    let soma = pedidoAtualizado.reduce((acc, prev)=>{
    acc + prev.preco;
    return acc;
}, 0)
let numeroPedido = Date.now() + Math.floor(Math.random() * 1000+1);
let pedido = {
numero: numeroPedido,
comercio,
usuario,
status: 'pendente',
produtos: pedidoAtualizado.map(produto => produto._id),
total: soma
}

let resultadoPedido = await Pedido.create(pedido);
resultUsuario.pedidos.push(pedido._id);
await resultadoUsuario.save();
res.send({status:"sucess", result: resultadoPedido});
  
}
const resolverPedido = async (req, res) => {
    const {resolve} = req.query;
    let pedido = await Pedido.findById(req.params.id);
    pedido.status = resolve;
    await pedido.save(pedido._id, pedido);
    res.send({status:"sucess", result: "Pedido Concluido"});

  }


module.exports = { getPedidos, getPedidosById, criarPedidos, resolverPedido}; 