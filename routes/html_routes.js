module.exports = function(app) {
	app.get("/", function(req, res) {
		res.render("index", {
			home: true
		});
	});

	app.get("/saved", function(req, res) {
		res.render("saved", {
			saved: true
		})
	});
}