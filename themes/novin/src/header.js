//Hamburger Menu
(function ($) {
	const $hamburger = $("header .inside-header .hamburger");
	const $mobile_menu_container = $(".nv-mobile-menu-contents");

	$hamburger.click(function () {
		$hamburger.toggleClass("is-active");
	});

	$hamburger.click(function () {
		$mobile_menu_container.toggleClass("is-active");
	});
})(jQuery);

//Mobile Search Bar
(function ($) {
	const $search = $("header .inside-header .mobile-header .mobile-search");
	const $searchicon = $("header .inside-header .mobile-header .mobile-search-icon");
	const $mobilemenuborder = $("header .inside-header .mobile-header .mobile-menu-border");

	$searchicon.click(function () {
		$search.toggleClass("is-open");
		$searchicon.toggleClass("is-open");
		$mobilemenuborder.toggleClass("hidden");
	});
})(jQuery);

//Dropdown arrow for submenus in mobile menu
(function ($) {
	$(".mobile-menu-nav ul > li.menu-item-has-children > a ").append(
		"<button class='dropdown-toggle' aria-expanded='false'><span class='screen-reader-text'>Expand child menu</span><svg xmlns='http://www.w3.org/2000/svg' width='23.616' height='13.503' viewBox='0 0 23.616 13.503'><path id='Icon_ionic-ios-arrow-down' data-name='Icon ionic-ios-arrow-down' d='M18,20.679l8.93-8.937a1.681,1.681,0,0,1,2.384,0,1.7,1.7,0,0,1,0,2.391L19.2,24.258a1.685,1.685,0,0,1-2.327.049L6.68,14.14a1.688,1.688,0,0,1,2.384-2.391Z' transform='translate(-6.188 -11.246)'/></svg></button>"
	);
})(jQuery);

(function ($) {
	// Drastically modified from the function in the WordPress Twenty Fifteen theme
	// Original source: https://github.com/WordPress/WordPress/blob/master/wp-content/themes/twentyfifteen/js/functions.js

	$(".mobile-menu-nav .dropdown-toggle").click(function (e) {
		var _this = $(this);
		e.preventDefault();
		_this.toggleClass("toggle-on");
		_this.parent().next(".sub-menu").toggleClass("toggled-on");
		_this.attr("aria-expanded", _this.attr("aria-expanded") === "false" ? "true" : "false");
		$(this)
			.find(".screen-reader-text")
			.html($(this).find(".screen-reader-text").html() === "Expand child menu" ? "Collapse child menu" : "Expand child menu");
	});
})(jQuery);
