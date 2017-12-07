module.exports = function(app) {
	require("./api_routes")(app);
	require("./html_routes")(app);
	require("./scrape_routes")(app);
}