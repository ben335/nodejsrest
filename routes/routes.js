//var db = require("./../db.js");

var appRouter = function(app, db) {

	app.get("/", function(request, response) {
    	response.send("Hello World");
	});

	app.get("/helloname", function(request, response) {
		response.send("Hello " + request.query.name);
	});

	app.get("/getuser", function(request, response) {
		//response.send("USER " + user(request.query.id));
		console.log(db.user);
		response.send("USER: " + db.user);
	});

}
 
module.exports = appRouter;