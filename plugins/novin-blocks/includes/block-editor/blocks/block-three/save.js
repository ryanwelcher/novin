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
			expertTitle,
			expertDescription,
			expertSkills,
			expertPrice,
			mediaURL,
			mediaID,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps.save({
		className: "novin-expert",
	});

	return (
		<div {...blockProps}>
			<div className="expert-header">
				<RichText.Content
					tagName="h3"
					className="expert-title"
					value={expertTitle}
				/>
				<RichText.Content
					tagName="p"
					className="expert-price"
					value={expertPrice}
				/>
			</div>
			<RichText.Content
				tagName="p"
				className="expert-description"
				value={expertDescription}
			/>
			<RichText.Content
				tagName="ul"
				multiline="li"
				className="expert-skills"
				value={expertSkills}
			/>
			<div className="expert-image">
				{mediaURL && (
					<img src={mediaURL} alt={__(expertTitle, "novin-blocks")} />
				)}
			</div>
		</div>
	);
};
export default Save;
