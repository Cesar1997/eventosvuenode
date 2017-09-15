const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');
const socketevento = require("./sockets/eventoSocket");

const server = require('http').Server(app.appserv);
const io = require('socket.io')(server);
let chat = io;


io.on('connection', function(socket){
    console.log(`un usuario se conecto`);
    socketevento.respond(chat,socket);
});

mongoose.connect(config.db,err => {
    if(err){
        console.log(`Opps Ocurrio un error en base de datos: ${err}`)
    }else{
        console.log(`Se conecto correctamente a la base de datos :)`);
        server.listen(config.port, () => {
            console.log(`El servidor http://localhost:${config.port} se esta ejecutando correctamente`);
        })
    }
})
