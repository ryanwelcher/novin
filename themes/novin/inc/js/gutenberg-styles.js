wp.domReady(() => {
	//The style class name is always starting with is-style-..... which is the registered Blockstyle name

	wp.blocks.registerBlockStyle("core/heading", {
		name: "zero", //style name is-style-zero
		label: "Zero margin",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/paragraph", {
		name: "zero-p", //style name is-style-zero-p
		label: "Zero margin",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/image", {
		name: "image-left", //style name is-style-zero
		label: "Image Left",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/image", {
		name: "image-right", //style name is-style-zero-p
		label: "Image Right",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/button", {
		name: "black-and-white", //style name is-style-black-and-white
		label: "Black and White",
		isDefault: true,
	});

	wp.blocks.registerBlockStyle("core/button", {
		name: "black-and-orange", //style name is-style-black-and-orange
		label: "Black and Orange",
		isDefault: true,
	});

	wp.blocks.registerBlockStyle("core/button", {
		name: "outline-black", //style name is-style-outline-black
		label: "Outline Black",
		isDefault: true,
	});

	wp.blocks.registerBlockStyle("core/group", {
		name: "no-style", //style name is-style-no-style
		label: "Remove gutenberg style",
		isDefault: true,
	});

	wp.blocks.registerBlockStyle("core/group", {
		name: "2-3-style", //style name is-style-2-3-style
		label: " 2/3 style",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/group", {
		name: "1-2-style", //style name is-style-1-2-style
		label: " 1/2 style",
		isDefault: false,
	});

	// wp.blocks.registerBlockStyle( 'core/gallery', {
	// 	name: 'gallery-style-1',  //style name is-style-gallery-style-1
	// 	label:' Masonry Black & White',
	// 	isDefault: false,
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/gallery', {
	// 	name: 'gallery-style-2',  //style name is-style-gallery-style-2
	// 	label:' Masonry Normal',
	// 	isDefault: true,
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/gallery', {
	// 	name: 'gallery-style-3',  //style name is-style-gallery-style-3
	// 	label:' Masonry Outline',
	// 	isDefault: false,
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/gallery', {
	// 	name: 'gallery-style-4',  //style name is-style-gallery-style-4
	// 	label:' Swiper Effect Cards',
	// 	isDefault: false,
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/gallery', {
	// 	name: 'gallery-style-5',  //style name is-style-gallery-style-5
	// 	label:' Swiper Effect Coverflow',
	// 	isDefault: false,
	// } );
	//
	// wp.blocks.registerBlockStyle( 'core/gallery', {
	// 	name: 'gallery-style-6',  //style name is-style-gallery-style-6
	// 	label:' Swiper Effect Creative',
	// 	isDefault: false,
	// } );

	wp.blocks.registerBlockStyle("core/quote", {
		name: "quote-style-1", //style name is-style-quote-style-1
		label: " Style 1",
		isDefault: true,
	});

	wp.blocks.registerBlockStyle("core/quote", {
		name: "quote-style-2", //style name is-style-quote-style-1
		label: " Style 2",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/media-text", {
		name: "novin-media-text", //style name is-style-novin-media-text
		label: "Novin Media Text Basic",
		isDefault: true,
	});
	wp.blocks.registerBlockStyle("core/columns", {
		name: "novin-why-container", //style name is-style-novin-why-container
		label: "Miért érdemes?",
		isDefault: false,
	});
});
