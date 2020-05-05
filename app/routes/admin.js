module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req, res) {
		application.app.controllers.adminController.formulario_inclusao_noticia(application, req, res);
	});

	application.post('/noticias/salvar', function(req, res) {
		application.app.controllers.adminController.noticias_salvar(application, req, res);
	});
}