//Pages general fix

(function ($) {
	$(document).ready(function () {
		//Compute height of the header and apply to main page
		const headerheight = $("header.site-header").outerHeight(true);
		console.log(headerheight);
		const height = $(window).height();
		const footerheight = $(".site-footer").outerHeight(true);
		console.log(footerheight);

		$("#page").css("min-height", height - footerheight - headerheight);
	});
})(jQuery);
