//se importa el modulo de ordenes
const {ordenes} = require('../datos/ordenes.js');

class ControladorOrdenes {
  constructor(){

  };
  obtenerOrden(req,res){
    const {estado} = req.query;
    if(Object.keys(req.query).length == 0){
      return res.status(200).json(ordenes);
    }
    const filtrarOrdenes = ordenes.filter(orden => orden.estado === estado);
    return res.status(200).json(filtrarOrdenes);
  };
  obtenerUnaOrden(req,res){
    const {id} = req.params;
    const idFiltrado = ordenes.filter(orden => orden.id == id);
    if(ordenes[id - 1]){
      res.status(200).json(idFiltrado);
    }else{
      res.status(404).json({mensaje:"verifica el id ingresado"})
    }
  }
  crearOrden(req,res){
    const nuevaOrden = req.body;
    ordenes.push(nuevaOrden);
    return res.status(201).json(ordenes);
  };
  actualizarOrden(req,res){
    const {id} = req.params;
    const infoActualizada = req.body;
    const indice = ordenes.findIndex(orden => orden.id == id);
    try{
      if(indice){
      const valor = ordenes[indice];
      Object.assign(valor,infoActualizada);
      res.status(200).json(valor);
    }}catch(err){
      res.status(404).json({mensaje: "verifica el id ingresado"})
  }};
  eliminarOrden(req,res){
    const {id} = req.params;
    const indice = ordenes.findIndex(orden => orden.id == id);
    if(ordenes[indice]){
      ordenes.splice(indice,1)
      res.status(200).json({mensaje:"se elimino la orden de manera exitosa"})
    }else{
      res.status(404).json({mensaje:"verifica el id ingresado"})
    }
  };
};

module.exports = new ControladorOrdenes();