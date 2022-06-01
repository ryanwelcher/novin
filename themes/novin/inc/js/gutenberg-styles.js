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

	wp.blocks.registerBlockStyle("core/paragraph", {
		name: "width-50", //style name is-style-width-50
		label: "50%(/75%) width",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/paragraph", {
		name: "width-40", //style name is-style-width-40
		label: "40%(/66%) width",
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
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/button", {
		name: "black-and-orange", //style name is-style-black-and-orange
		label: "Black and Orange",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/button", {
		name: "orange-and-black", //style name is-style-orange-and-black
		label: "Orange and Black",
		isDefault: false,
	});

	wp.blocks.registerBlockStyle("core/button", {
		name: "outline-black", //style name is-style-outline-black
		label: "Outline Black",
		isDefault: false,
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
