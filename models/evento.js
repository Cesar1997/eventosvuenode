'use strict'
const mongoose = require("mongoose");

let eventoSchema = new mongoose.Schema({
    name : String,
    description : String,
    latitude : String,
    longitude : String    
})
module.exports = mongoose.model('evento',eventoSchema); 
