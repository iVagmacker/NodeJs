var app = require('./config/server')

var routeNews = require('./app/routes/noticias');
routeNews(app);

var routeHome = require('./app/routes/home');
routehome(app);

var routeFormNew = require('./app/routes/formulario_inclusao_noticias');
routeFormNew(app);

app.listen(3000, function() {
	console.log('Servidor ON');
});
