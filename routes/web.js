'use strict'


const express = require("express");
const web = express.Router();

//controladores
const eventoCtrl = require("../controllers/eventoCtrl");

web.get('/evento',eventoCtrl.getEventos);
web.get("/evento/:eventoId",eventoCtrl.getEvento);
web.post("/evento",eventoCtrl.saveEvento);
web.put("/evento/:eventoId",eventoCtrl.updateEvento);
web.delete("/evento/:eventoId",eventoCtrl.deleteEvento);
web.get("/removeallevent",eventoCtrl.removeAllEvento);
module.exports = web;