var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');
cors = require('cors');

// Connection to DB
mongoose.connect('mongodb://localhost/marvel', function (err, res) {
    if (err) throw err;
    console.log('Conexion Establecida');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// Importar Models y controllers
var models = require('./models/datos')(app, mongoose);
var DatosCtrl = require('./controllers/datos');

var router = express.Router();

app.use(router);

// API routes
var datos = express.Router();

datos.route('/datos')
    .get(DatosCtrl.findAllDatoss)
    .post(DatosCtrl.addDatos);

datos.route('/datos/:id')
    .get(DatosCtrl.findById)
    .put(DatosCtrl.updateDatos)
    .delete(DatosCtrl.deleteDatos);

app.use('/api', datos);

app.listen(3000, function () {
    console.log("Apliación Corriendo En http://localhost:3000");
});
