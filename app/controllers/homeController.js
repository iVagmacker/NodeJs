module.exports.index = function(application, req, res) {

	var connection = application.config.database();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getFiveLastNews(function(error, result){
		res.render("home/index", {noticias : result});
	});
}