const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Biendevido!'
    });



    client.on('disconnect', () => {
        console.log('Usuario deconectado');
    });

    //escuchar el cliente:
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* if (mensaje.usuario) {
             callback({
                 respuesta: 'todo salio bien',

             });
         } else {
             callback({
                 respuesta: 'todo salio mal!!!',

             });
         }*/




    });

});