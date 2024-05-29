const express = require('express');
const router = express.Router();
const pedidoController = require('../controller/pedidoController');


router.get('/api/pedido', pedidoController.getPedidos);
router.get('/api/pedido/:id', pedidoController.getPedidosById);
router.post('/api/pedido', pedidoController.criarPedidos);


module.exports = router;