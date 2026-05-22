const {clientes} = require('../datos/clientes.js')

class ControladorClientes {
  constructor(){

  };
  obtenerCliente(req,res){
    const {nombre, documento} = req.query;
    if(Object.keys(req.query).length === 0){
      res.status(200).json(clientes);
    }else if(Object.keys(req.query) == 'documento'){
      const filtarClientesDocumento = clientes.filter(clientes => clientes.documento == documento)
      res.status(200).json(filtarClientesDocumento)
    }else if(Object.keys(req.query) == 'nombre'){
      const filtarClientesNombre = clientes.filter(clientes => clientes.nombre == nombre)
      res.status(200).json(filtarClientesNombre)
    }else{
      res.status(404).json({mensaje:"verifica la query ingresada"})
    }
  }
  ingresarCliente(req,res){
    const nuevoCliente = req.body;
    clientes.push(nuevoCliente);
    return res.status(201).json(clientes);
  }
  actualizarCliente(req,res){
    const infoActualizada = req.body;
    const id = req.params.id;
    const indice = clientes.findIndex(orden => orden.id == id);

    if(clientes[indice -1]){
      const contenidoAntiguo = clientes[indice];
      Object.assign(contenidoAntiguo, infoActualizada)
      res.status(200).json(clientes[indice])
    }else{
      res.status(404).json({mensaje:"verifica el id ingresado"})
    }
}
  eliminarCliente(req,res){
    const id = req.params.id;
    const indice = clientes.findIndex(orden => orden.id == id);
    if(cliente[indice]){
    clientes.splice(indice,1);
    res.status(200).json(clientes)
    }else{
      res.status(404).json({mensaje:"verifica el id ingresado"})
    }
}};

module.exports = new ControladorClientes();