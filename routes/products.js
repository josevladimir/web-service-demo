const express = require('express');
const Router = express.Router();
const controller = require('../controllers/productsController');

Router.get('/',controller.index)
      .get('/:id',controller.show)
      .post('/',controller.create)
      .put('/:id',controller.update)
      .delete('/:id',controller.remove);

module.exports = Router;