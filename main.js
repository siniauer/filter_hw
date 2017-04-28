$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);

		button.toggleClass("active");

		$(".item.active").removeClass("active");

		$(".filter.active").each(function () {
			var filter = $(this);
			items = filter.data("filter");
			$("." + items).addClass("active");
		});
	});
});
