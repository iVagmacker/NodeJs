module.exports.noticias = function(application, req, res) {
	var connection = application.config.database();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticias(function(error, result) {
	 		res.render("noticias/noticias", {noticias : result});
	});
}

module.exports.noticia = function(application, req, res) {
	var connection = application.config.database();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	var id = req.query;

		noticiasModel.getNoticia(id, function(error, result) {
	 		res.render("noticias/noticia", {noticia : result});
	});
}