$(function() {
	$("#scrapebtn").on("click", function(event) {
		event.preventDefault();
		$.getJSON( "/scrape", function( articles ) {
			$("#infoModalText").text("Found " + articles.length + " new articles.");
			$("#infoModal").modal();
		});
	});

	$("#infoModalClose").on("click", function(event) {
		event.preventDefault();
		location.reload();
	});
});