$(function() {
	$(".btn-delete").on("click", function(event) {
		event.preventDefault();
		$.ajax({
			url: "/api/delete/" + $(this).attr("data-id"),
			method: "DELETE",
			success: function(response) {
			console.log(response);
				$("#infoModalText").text("Removed article from saved");
				$("#infoModal").modal();
		}});
	});
});