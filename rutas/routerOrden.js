//se importa express
const express = require('express');
//se crea el router
const routerOrden = express.Router();
//se importa el controlador de ordenes
const controladorOrdenes = require('../controladores/controladorOrdenes.js');

routerOrden.use(express.json());

routerOrden.route('/')
//endpoint para mostrar todas las ordenes
  .get(controladorOrdenes.obtenerOrden)
  //endpoint para crear una orden
  .post(controladorOrdenes.crearOrden);

routerOrden.route('/:id')
  //Endpoint para buscar una orden especifica
  .get(controladorOrdenes.obtenerUnaOrden)
  //endpoint modificar una orden pendiente
  .patch(controladorOrdenes.actualizarOrden)
  //endpoint para eliminar una orden pendiente
  .delete(controladorOrdenes.eliminarOrden);

//exportacion del modulo
module.exports = routerOrden;