//se importa express
const express = require('express');
//se crea la instancia app
const app = express();
//se crea el puerto
const PORT = 3000;
//se importan las ordenes
const {ordenes} = require('./datos/ordenes.js')
//se importa el modulo orden
const crearOrden = require('./rutas/orden.js')
app.use('/api/orden', crearOrden);

app.get('/', (req,res) => {
  res.send("Servidor opertativo")
})




//se crea la escucha del puerto
app.listen(PORT, () => {
  console.log(`app escuchando en el puerto ${PORT}`)
})
