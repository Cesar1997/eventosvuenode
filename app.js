const express = require("express");
const app = express();
const appserv = app;

const bodyParser = require('body-parser');  
const config = require('./config');
const web = require("./routes/web");



app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.get("/hola" , (req,res) => {
    res.status(200).send({message : `Hola`});
});
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use("/web",web);


module.exports = {app,appserv};




