

class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }


    socketEvents() 
    {
        //  escuchar cuando un cliente se conecta
        this.io.on('connection', (socket) => 
        {  
            

            //  Emitir mensaje de bienvenida al conectar
            socket.on('mensaje-to-server', (data) => 
            {
                console.log(data);
                // Responder al mensaje del cliente
                this.io.emit('mensaje-from-server', data);
            });



        });
    }
}
        module.exports = Sockets;