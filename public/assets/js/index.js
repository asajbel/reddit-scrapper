$(function() {
	$("#scrapebtn").on("click", function(event) {
		event.preventDefault();
		$.getJSON( "/scrape", function( articles ) {
			$("#infoModalText").text("Found " + articles.length + " new articles.");
			$("#infoModal").modal();
		});
	});

	$(".btn-save").on("click", function(event) {
		event.preventDefault();
		$.ajax({
			url: "/api/save/" + $(this).attr("data-id"),
			method: "PUT",
			success: function(response) {
			console.log(response);
				$("#infoModalText").text("Saved article");
				$("#infoModal").modal();
		}});
	});
});