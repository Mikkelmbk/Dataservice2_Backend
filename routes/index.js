const mysql = require('mysql2');

const db2 = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'testdatabase2'
});

const db1 = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'testdatabase1'
});

module.exports = function(app){

	app.get('/', function(req, res){

		res.send("Mikkel")

	});

	app.get('/user', function(req, res){
		res.send({
			"name":"Mikkel",
			"age":24
		})
	});

	app.get('/home', function(req, res){
		let home = {
			"website":"homePage",
			"description":"Website beskrivelse"
		}
		res.send(home);
	});

	app.get('/getAllUsers', function (req, res) {
		db1.query('SELECT fornavn FROM bruger', function (err, rows) { // fornavn for at finde fornavn propertien i databasens array
			if (err) {
				res.send(err)
			} else {
				res.send(rows)
			}
		})
	})
	app.get('/getAllProducts', function (req, res) {
		db2.query('SELECT * FROM produkter', function (err, rows) { // * for at vælge alle properties i databasens array
			if (err) {
				res.send(err)
			} else {
				res.send(rows)
			}
		})
	})
}