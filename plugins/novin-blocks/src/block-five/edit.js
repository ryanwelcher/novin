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
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

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
		attributes: { compTitle, compDesc, mediaURL, mediaID },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: "novin-competitive-advantage",
	});

	const handleCompTitleChange = (value) => {
		setAttributes({ compTitle: value });
	};

	const handleCompDescChange = (value) => {
		setAttributes({ compDesc: value });
	};

	const onSelectImage = (media) => {
		//I have a "mobile" thumbnail size defined in my theme
		const mediaurl = media.sizes.mobile.url ?? media.url;
		setAttributes({
			mediaURL: mediaurl,
			mediaID: media.id,
		});
	};

	return (
		<div {...blockProps}>
			<div className="comp-image">
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
			</div>
			<RichText
				tagName="h3"
				className="comp-title"
				onChange={handleCompTitleChange}
				value={compTitle}
				placeholder={__("Versenyelőny megnevezése", "novin-blocks")}
			/>
			<RichText
				tagName="p"
				className="comp-desc"
				onChange={handleCompDescChange}
				value={compDesc}
				placeholder={__("Versenyelőny leírása", "novin-blocks")}
			/>
		</div>
	);
};

export default Edit;
