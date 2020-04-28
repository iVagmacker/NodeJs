var mysql = require('mysql');

var dbMySQL = function() {
	console.log('Conexao com o banco de dados foi estabelecida');
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'portal_noticias'
		});
	}
	module.exports = function() {
		console.log('O autoload carregou o módulo de conexão com o banco de dados');
		return dbMySQL;
	}