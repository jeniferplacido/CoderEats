const ComercioDAO = require('../../dao/classes/comercio.dao');

const getComercios = async (req, res) => {
    let result = await ComercioDAO.getComercios();
    if(!result) return res.status(500).send({status:"error", error:"Erro Servidor"});
    res.send({status:"sucess", result:result});
};

const getComercioById = async (req, res) => {
    let id = req.params.id;
    let result = await ComercioDAO.getComercioById(id);
    if(!result) return res.status(500).send({status:"error", error:"Erro Servidor"});
    res.send({status:"sucess", result:result});
};

const saveComercio = async (req, res) => {
    let comercio = req.body;
    let result = await ComercioDAO.saveComercio(comercio);
    if(!result) return res.status(500).send({status:"error", error:"Erro Servidor"});
    res.send({status:"sucess", result:result});
};


const updateComercio = async (req, res) => {
    let id = req.params.id;
    let comercio = req.body;
    let result = await ComercioDAO.updateComercio(id, comercio);
    if(!result) return res.status(500).send({status:"error", error:"Erro Servidor"});
    res.send({status:"sucess", result:result});
};

const adicionarProduto = async (req, res) => {
   let produto = req.body;
   let result = await ComercioDAO.adicionarProduto(produto);
   if(!result) return res.status(500).send({status:"error", error:"Erro Servidor"});
   res.send({status:"sucess", result:result});
};


module.exports = { getComercios, getComercioById, saveComercio, updateComercio,
    adicionarProduto
 };