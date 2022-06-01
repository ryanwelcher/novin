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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
const Save = (props) => {
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

	const blockProps = useBlockProps.save({
		className: "novin-miben-block",
	});

	return (
		<div {...blockProps} style={{ backgroundColor: mibenBgColor }}>
			<div className="miben-image">
				{mediaURL && (
					<img src={mediaURL} alt={__(mibenTitle, "novin-blocks")} />
				)}
			</div>
			<RichText.Content
				style={{ color: mibenTextColor }}
				tagName="h3"
				className="miben-title"
				value={mibenTitle}
			/>
			<RichText.Content
				style={{ color: mibenTextColor2 }}
				tagName="p"
				className="miben-desc"
				value={mibenDesc}
			/>
		</div>
	);
};
export default Save;
