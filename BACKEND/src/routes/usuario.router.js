const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/api/usuario', usuarioController.getUsuarios);
router.get('/api/usuario/:id', usuarioController.getUsuariosById);
router.post('/api/usuario', usuarioController.criarUsuario);
router.put('/api/usuario/:id', usuarioController.atualizarUsuario);
router.delete('/api/usuario/:id', usuarioController.deletarUsuario);



module.exports = router;