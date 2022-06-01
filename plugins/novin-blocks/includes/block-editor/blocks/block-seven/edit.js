/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	ColorPalette, //if you call the color pallete from the editor, your palette's colors will come from the default which is either in theme.json or in your functions.php add_theme_support('editor-color-palette', array(....))
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import {
	TextareaControl,
	Panel,
	PanelBody,
	PanelRow,
	ColorIndicator,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = (props) => {
	// Lift info from props and populate various constants.
	const {
		attributes: {
			mibenTitle,
			mibenDesc,
			mediaURL,
			mediaID,
			mibenBgColor,
			mibenTextColor,
			mibenTextColor2,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: "novin-miben-block",
	});

	const handlemibenTitleChange = (value) => {
		setAttributes({ mibenTitle: value });
	};

	const handlemibenDescChange = (value) => {
		setAttributes({ mibenDesc: value });
	};

	const onChangeBackgroundcolor = (value) => {
		setAttributes({ mibenBgColor: value });
	};

	const onChangeTextcolor = (value) => {
		setAttributes({ mibenTextColor: value });
	};

	const onChangeTextcolor2 = (value) => {
		setAttributes({ mibenTextColor2: value });
	};

	const onSelectImage = (media) => {
		//I have a "tablet" thumbnail size defined in my theme
		const mediaurl = media.sizes.tablet.url ?? media.url;
		setAttributes({
			mediaURL: mediaurl,
			mediaID: media.id,
		});
	};

	return (
		<div {...blockProps} style={{ backgroundColor: mibenBgColor }}>
			<InspectorControls>
				<PanelBody
					title={__(
						"Miben tudunk még segíteni színbeállítások",
						"novin-blocks"
					)}
					initialOpen={true}
					className="novin-colors-panel"
				>
					<PanelRow>
						{__("Blokk háttérszíne:", "novin-blocks")}
						<ColorIndicator colorValue={mibenBgColor} />
					</PanelRow>
					<ColorPalette
						value={mibenBgColor}
						onChange={onChangeBackgroundcolor}
					/>
					<PanelRow>
						{__("Cím színe:", "novin-blocks")}
						<ColorIndicator colorValue={mibenTextColor} />
					</PanelRow>
					<ColorPalette value={mibenTextColor} onChange={onChangeTextcolor} />
					<PanelRow>
						{__("Leírás színe:", "novin-blocks")}
						<ColorIndicator colorValue={mibenTextColor} />
					</PanelRow>
					<ColorPalette value={mibenTextColor2} onChange={onChangeTextcolor2} />
				</PanelBody>
			</InspectorControls>
			<div className="miben-image">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes="image"
						value={mediaID}
						render={({ open }) => (
							<Button
								className={mediaID ? "image-button" : "button button-large"}
								onClick={open}
							>
								{!mediaID ? (
									__("Upload Image", "novin-blocks")
								) : (
									<>
										<div>{__("Change Image", "novin-blocks")}</div>
										<img
											src={mediaURL}
											alt={__("Upload Image", "novin-blocks")}
										/>
									</>
								)}
							</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>
			<RichText
				style={{ color: mibenTextColor }}
				tagName="h3"
				className="miben-title"
				onChange={handlemibenTitleChange}
				value={mibenTitle}
				placeholder={__("Miben tudunk még segíteni?", "novin-blocks")}
			/>
			<RichText
				style={{ color: mibenTextColor2 }}
				tagName="p"
				className="miben-desc"
				onChange={handlemibenDescChange}
				value={mibenDesc}
				placeholder={__("Hosszú leírása", "novin-blocks")}
			/>
		</div>
	);
};

export default Edit;
