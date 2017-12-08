var db = require("../models");



module.exports = function(app) {
  var coreUser = {
    name: "scrapper"
  };

  db.User
    .create(coreUser)
    .then(function(dbUser) {
      console.log(dbUser);
    })
    .catch(function(err) {
      console.log(err.message);
    });

  app.put("/api/save/:id", function(req, res) {
  	console.log(req.params.id);
  	db.User.findOneAndUpdate({name: "scrapper"}, { $push: { articles: req.params.id} }, { new: true })
  		.then(function (result) {
  			console.log(result);
  			res.send(result).end();
  		})
  		.catch(function (err) {
  			console.log(err);
  			res.send(err).end();
  		});
  });

  app.delete("/api/delete/:id", function(req, res) {
  	console.log(req.params.id);
  	db.User.findOneAndUpdate({name: "scrapper"}, { $pull: { articles: req.params.id } }, { new: true })
  		.then(function (result) {
  			console.log(result);
  			res.send(result).end();
  		})
  		.catch(function (err) {
  			console.log(err);
  			res.send(err).end();
  		});
  });

  app.get("/api/note/:id", function(req, res) {
  	console.log(req.params.id);
  	db.Article.findOne({_id: req.params.id})
			.populate("notes")
			.then(function(dbArticle) {
				res.json(dbArticle.notes);
			})
			.catch(function(err) {
				console.log(err);
			});
  })

  app.post("/api/note/:id", function(req, res) {
  	db.Note.create(req.body)
  		.then( function (dbNote) {
  			console.log(dbNote);
  			return db.Article.findOneAndUpdate(
  				{_id: req.params.id}, 
  				{ $push: { notes: dbNote._id}}, 
  				{new: true});
  		})
  		.then(function (result) {
  			res.send(result).end();
  		})
  		.catch( function (err) {
  			console.log(err);
  			res.send(err).end();
  		});
  });
}