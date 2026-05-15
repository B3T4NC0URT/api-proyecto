//Desde este modulo se van a gestionar las rutas de orden
//se importa express
const express = require('express');
//se importa el modulo de ordenes
const {ordenes} = require('../datos/ordenes.js')
//se crea el router
const routerOrden = express.Router();
routerOrden.use(express.json())
//endpoint para mostrar todas las ordenes
routerOrden.get('/', (req,res) => {
  res.json(ordenes);
});
//endpoint para mostrar las ordenes pendientes
routerOrden.get('/pendientes', (req,res) => {
  const pendientes = ordenes.pendientes;
  res.status(200).json(pendientes);
});
//endpoitn para mostrar las ordenes completadas
routerOrden.get('/completadas',(req,res) => {
  const completadas = ordenes.completadas;
  res.status(200).json(completadas);
});
//endpoint para crear una orden
routerOrden.post('/pendientes',(req,res) =>{
  const nuevaOrden = req.body;
  const guardarOrden = ordenes.pendientes.push(nuevaOrden);
  if(guardarOrden){
    res.status(201).json(ordenes.pendientes);
  }
});
//endpoint modificar una orden pendiente
routerOrden.patch('/pendientes/:id', (req,res) =>{
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = ordenes.pendientes.findIndex(orden => orden.id == id);
  if(indice >= 0){
    const contenidoAntiguo = ordenes.pendientes[indice];
    Object.assign(contenidoAntiguo, infoActualizada)
  }
  res.status(200).json(ordenes.pendientes[indice])
})
//endpoint para eliminar una orden pendiente
routerOrden.delete('/pendientes/:id',(req,res) => {
  const id = req.params.id;
  const indice = ordenes.pendientes.findIndex(orden => orden.id == id);
  if(indice >= 0){
    ordenes.pendientes.splice(indice,1);
  }
  res.status(200).json(ordenes.pendientes)
})
//endpoint para eliminar una orden completada
routerOrden.delete('/completadas/:id',(req,res) => {
  const id = req.params.id;
  const indice = ordenes.completadas.findIndex(orden => orden.id == id);
  if(indice >= 0 && ordenes.completadas.length >= 10){
    ordenes.pendientes.splice(indice,1);
    res.status(200).json(ordenes.completadas)
  }else{
    res.status(500).end("Debes tener mas de 10 ordenes, para poder borrar.")
  }
})
//exportacion del modulo
module.exports = routerOrden;