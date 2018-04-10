//File: controllers/datoss.js
var mongoose = require('mongoose');
var Datos = mongoose.model('datos');
var response = { success: false, object: null, message: "" };

//Obtiene Todos
exports.findAllDatoss = function (req, res) {
	Datos.find(function (err, datoss) {
		if (err) {
			response.success = false;
			response.object = null;
			response.message = err.message;
			res.json(response);
		} else {
			response.success = true;
			response.object = datoss;
			response.message = "Lista De Datos";
			res.json(response);
		}

	});
};

//Obtiene Uno
exports.findById = function (req, res) {
	Datos.findById(req.params.id, function (err, datos) {
		if (err) {
			response.success = false;
			response.object = null;
			response.message = err.message;
			res.json(response);
		} else {
			console.log('GET /datos/' + req.params.id);
			response.success = true;
			response.object = datos;
			response.message = "Dato";
			res.json(response);
		}
	});
};

//Inserta
exports.addDatos = function (req, res) {
	console.log('POST');
	console.log(req.body);

	var datos = new Datos({
		nombre: req.body.nombre,
		email: req.body.email,
		personaje: req.body.personaje,
		url: req.body.url,
		type: req.body.type
	});

	datos.save(function (err, datos) {
		if (err) {
			response.success = false;
			response.object = null;
			response.message = err.message;
			res.json(response);
		} else {
			response.success = true;
			response.object = datos;
			response.message = "Guardado";
			res.json(response);
		}
	});
};

//Actualiza
exports.updateDatos = function (req, res) {
	Datos.findById(req.params.id, function (err, datos) {
		datos.nombre = req.body.nombre,
			datos.email = req.body.email,
			datos.personaje = req.body.personaje,
			datos.url = req.body.url,
			datos.type = req.body.type

		datos.save(function (err) {
			if (err) {
				response.success = false;
				response.object = null;
				response.message = err.message;
				res.json(response);
			} else {
				response.success = true;
				response.object = datos;
				response.message = "Actualizado";
				res.json(response);
			}
		});
	});
};

//Eliminar
exports.deleteDatos = function (req, res) {
	Datos.findById(req.params.id, function (err, datos) {
		datos.remove(function (err) {
			if (err) {
				response.success = false;
				response.object = null;
				response.message = err.message;
				res.json(response);
			} else {
				response.success = true;
				response.object = null;
				response.message = "Eliminado";
				res.json(response);
			}
		})
	});
};
