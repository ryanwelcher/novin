/* Frontend functionalities */

//Toggle class when clicking on the FAQ question
(function ($) {
	const $gyiktop = $(".novin-gyik-container .novin-gyik-top");

	$gyiktop.click(function () {
		$(this).parent(".novin-gyik-container").toggleClass("is-active");
	});
})(jQuery);
