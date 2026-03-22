// Importar el servidor de Express
const Server = require('./models/server.js');//servidor de express
require('dotenv').config();//cargar variables de entorno

// Crear una instancia del servidor
const server = new Server();

/// Ejecutar el servidor
server.execute();



//io.on('connection', (socket) => {  


    // Emitir mensaje de bienvenida al conectar
    //socket.emit('mensaje-bienvenida', {
    //    msg: 'Bienvenido al server',
    //    fecha: new Date()
   // });

    // Escuchar mensajes del cliente
  //  socket.on('mensaje-to-server', (data) => {
    //    console.log(data);
        
        // Responder al mensaje del cliente
      //  io.emit('mensaje-from-server', data);
    //});
 //});

