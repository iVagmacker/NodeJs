module.exports = function(app) {
	
	app.get('/noticia', function(req, res) {

		var connection = app.config.database();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result) {
	 		res.render("noticias/noticias", {noticias : result});
		});
	});
};