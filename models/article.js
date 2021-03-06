var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	titleLink: {
		type: String,
		required: true,
	},
	score: {
		type: String,
		required: true,
	},
	user: {
		type: String,
		required: true,
	},
	userLink: {
		type: String,
		required: true,
	},
	comments: {
		type: String,
		required: true,
	},
	commentsLink: {
		type: String,
		required: true
	},
	subreddit: {
		type: String,
		required: true,
	},
	subredditLink: {
		type: String,
		required: true,
	},
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
}, { timestamps: true });

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;