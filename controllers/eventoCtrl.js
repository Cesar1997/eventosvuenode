'use strict'
const Evento = require('../models/evento');
const eventoSocket = require('../sockets/eventoSocket');
function getEventos (req,res){
    Evento.find({},(err,eventos) => {
        if(err) return res.status(500).send({message : `Ocurrio un error : ${err}`});
        
        if(!eventos) return res.status(404).send({message : `No se encontraron eventos`});

        res.status(200).send({status : true, message : `Se consultaron correctamente `, records : eventos});
        
    })
};

function getEvento(req,res){
    console.log(req.params.eventoId)
    Evento.findById(req.params.eventoId,(err,evento) => {
        if(err) return res.status(500).send({message : `Ocurrio un error : ${err}`});

        if(!evento) return res.status(404).send({message : `No se encontro el evento`});
    
        res.status(200).send({status : true, message : `Se consultaron correctamente `, records : evento});
    });
}

function saveEvento(req,res){
    let newEvent = new Evento({
        name : req.body.name,
        description : req.body.description,
        latitude : req.body.latitude,
        longitude : req.body.longitude
    });

    newEvent.save((err,evento) => {
        if(err){
            return res.status(500).send({message : `Ocurrio un error : ${err}`});
        }else{
           // eventoSocket.CreateSocket(evento);
            res.status(200).send({status : true, message : `Se Guardo correctamente `, records : evento});
        }
    })
}
function updateEvento(req,res){
    let eventId = req.params.eventId;
    let evento = req.body;
    let updateEvent = Evento.findOneAndUpdate(eventId,evento,(err,eventoupdated) => {
        if(err){
            return res.status(500).send({message : `Ocurrio un error : ${err}`});
        }else{
            res.status(200).send({status : true, message : `Se Guardo correctamente `, records : evento});
        }
    })
}
function deleteEvento(req,res){

}


function removeAllEvento(req,res){
     Evento.find({},(err,eventos) => {
        if(err) return res.status(500).send({message : `Ocurrio un error : ${err}`});
        
        if(!eventos) return res.status(404).send({message : `No se encontraron eventos`});

        eventos.forEach(data => {
             Evento.findOneAndRemove(data._id, (err,deleted) => {
                console.log(`Eliminado ${deleted}`);
            });
        })
        res.status(200).send({status : true, message : `Se Eliminaron correctamente `});
    })
}

module.exports = {
    getEventos,
    getEvento,
    saveEvento,
    updateEvento,
    deleteEvento,
    removeAllEvento
}