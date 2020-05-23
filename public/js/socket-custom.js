var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');


});

//esccuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//emitir informacion
socket.emit('enviarMensaje', {
    usuario: 'alex',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);
})