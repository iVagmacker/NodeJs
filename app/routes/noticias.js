var database = require('../../config/database');

module.exports = function(app) {

	var connection = database();
	
	app.get('/noticias', function(req, res) {

		connection.query('select * from noticias', function(error, result) {
	 		res.render("noticias/noticias", {noticias : result});
		});
	});
};