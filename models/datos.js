exports = module.exports = function(app, mongoose) {

	var datosSchema = new mongoose.Schema({
		nombre: 		{ type: String },
		email: 		{ type: String },
		personaje: 	{ type: String },
		url:  	{ type: String },
		type: 		{
			type: String,
			enum: ['details', 'wiki', 'comiclink']
		},
		summary: 	{ type: String }
	});

	mongoose.model('datos', datosSchema);

};
