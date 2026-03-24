//servidor de express
const express = require('express');
//servidor de sockets
const http = require('http')
//servidor de sockets
const socketio = require('socket.io');
//path para manejar rutas
const path = require('path');



//importar sockets
const Sockets = require('./sockets.js');

class server 
{

    constructor()
        {
            
              this.app = express();
              this.port = process.env.PORT || 4000;
              this.server = http.createServer(this.app);
              this.io = socketio(this.server, {});
            

            //socket server

            //this.io = require('socket.io')(this.server);

            //Configuraciones de sockets
            this.io = socketio(this.server, {});
        }

        middlewares()
        {
            //desplegar el directorio publico
            this.app.use(express.static(path.resolve(__dirname, '../public')));//__dirname es la ruta del archivo actual, ../public es la ruta del directorio publico

            
        }

        configurarSockets()
        //Configurar sockets
        {
            new Sockets(this.io);
        }

        execute() 
        {
            //Inicializar middlewares
            this.middlewares();

            //Inicializar sockets
            this.configurarSockets();

            //inicializar server 
            this.server.listen(this.port, () => 
            {
                console.log('Servidor corriendo en el puerto ' + this.port);
            });
        }   
}

module.exports = server;