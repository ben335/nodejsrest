var appRouter = function(app) {

	app.get("/", function(request, response) {
    	response.send("Hello World");
	});
 
}
 
module.exports = appRouter;