//Desde este modulo se van a gestionar las rutas de clientes
//se importa express
const express = require('express');
//se importa el modulo de clientes
const {clientes} = require('../datos/clientes.js');
//se crea el router 
const routerClientes = express.Router();
routerClientes.use(express.json());
//endpoin que muestra todos los clientes
routerClientes.get('/',(req,res) =>{
  res.json(clientes)
});
//endpoin para busqueda con parametros
routerClientes.get('/:nombre', (req,res) => {
  const nombre = req.params.nombre;
  const filtrado = clientes.filter(cliente => cliente.nombre === nombre);
  res.status(200).json(filtrado)
})
//endpoint para agregar cliente
routerClientes.post('/',(req,res) =>{
  const nuevaOrden = req.body;
  const guardarOrden = clientes.push(nuevaOrden);
  if(guardarOrden){
    res.status(201).json(clientes)
  }
});
//endpoint modificar un cliente
routerClientes.patch('/:id', (req,res) =>{
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = clientes.findIndex(orden => orden.id == id);
  if(indice >= 0){
    const contenidoAntiguo = clientes[indice];
    Object.assign(contenidoAntiguo, infoActualizada)
  }
  res.status(200).json(clientes[indice])
})
//endpoint para eliminar una cliente
routerClientes.delete('/:id',(req,res) => {
  const id = req.params.id;
  const indice = clientes.findIndex(orden => orden.id == id);
  if(indice >= 0){
    clientes.splice(indice,1);
  }
  res.status(200).json(clientes)
})

module.exports = routerClientes;