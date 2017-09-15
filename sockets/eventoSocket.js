    module.exports.respond = function(endpoint, socket){
        socket.on('news',function(newreel){
            console.log(newreel)
            endpoint.emit("newevent",newreel);
        })
    }
