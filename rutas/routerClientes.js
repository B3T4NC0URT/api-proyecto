//se importa express
const express = require('express');
//se importa el modulo de clientes
const {clientes} = require('../datos/clientes.js');
//se crea el router 
const routerClientes = express.Router();
//se importa el controlador
const controladorClientes = require('../controladores/controladorClientes.js');

routerClientes.use(express.json());

routerClientes.route('/')
  //endpoin que muestra todos los clientes
  .get(controladorClientes.obtenerCliente)
  //endpoint para agregar cliente
  .post(controladorClientes.ingresarCliente);

routerClientes.route('/:id')
  //endpoint modificar un cliente
  .patch(controladorClientes.actualizarCliente)
  //endpoint para eliminar una cliente
  .delete(controladorClientes.eliminarCliente);
  
module.exports = routerClientes;