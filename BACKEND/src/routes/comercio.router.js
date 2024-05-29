const express = require('express');
const router = express.Router();
const comercioController = require('../controller/comercioController');


router.get('/api/comercio', comercioController.getComercios);
router.get('/api/comercio/:id', comercioController.getComercioById);
router.post('/api/comercio', comercioController.saveComercio);
router.put('/api/comercio/:id', comercioController.updateComercio);



module.exports = router;
