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
}