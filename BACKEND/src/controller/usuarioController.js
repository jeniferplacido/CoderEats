const getUsuarios = async (req, res) => {
    res.send({status:"sucess", result:"getUsuarios"});
};

const getUsuariosById = async (req, res) => {
    res.send({status:"sucess", result:"getUsuariosById"});
};

const criarUsuario = async (req, res) => {
    res.send({status:"sucess", result:"criarUsuario"});
};

const atualizarUsuario = async (req, res) => {
    res.send({status:"sucess", result:"atualizarUsuario"});
};

const deletarUsuario = async (req, res) => {
    res.send({status:"sucess", result:"deletarUsuario"});
};

module.exports = {
    getUsuarios,getUsuariosById,criarUsuario,atualizarUsuario,deletarUsuario}
