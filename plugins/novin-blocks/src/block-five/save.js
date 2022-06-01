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
		attributes: { compTitle, compDesc, mediaURL, mediaID },
		setAttributes,
	} = props;

	const blockProps = useBlockProps.save({
		className: "novin-competitive-advantage",
	});

	return (
		<div {...blockProps}>
			<div className="comp-image">
				{mediaURL && <img src={mediaURL} alt={__(compTitle, "novin-blocks")} />}
			</div>
			<RichText.Content tagName="h3" className="comp-title" value={compTitle} />
			<RichText.Content tagName="p" className="comp-desc" value={compDesc} />
		</div>
	);
};
export default Save;
