db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Article.find({})
			.sort({createdAt: -1})
			.then(function(dbArticles) {
				res.render("index", {
					home: true,
					articles: dbArticles
				})
			})
			.catch(function(err) {
				console.log(err);
			});
	});

	app.get("/saved", function(req, res) {
		db.Article.find({})
			.sort({createdAt: -1})
			.then(function(dbArticles) {
				res.render("index", {
					saved: true,
					articles: dbArticles
				})
			})
			.catch(function(err) {
				console.log(err);
			});
	});
}