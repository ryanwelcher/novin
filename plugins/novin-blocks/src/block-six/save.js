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
	ColorPalette,
	InspectorControls,
	PlainText,
	RichText,
} from "@wordpress/block-editor";

import { RawHTML } from "@wordpress/element";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

const save = (props) => {
	// Lift info from props and populate various constants.
	const {
		attributes: {
			customerquestionIcon,
			customerquestionTitle,
			customerquestionIconBgColor,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps.save({
		className: "novin-customer-block",
	});

	return (
		<div {...blockProps}>
			<div
				className="customer-icon-bg"
				style={{ backgroundColor: customerquestionIconBgColor }}
			>
				<RawHTML
					style={{ backgroundColor: customerquestionIconBgColor }}
					className="customerquestion-icon"
				>
					{customerquestionIcon}
				</RawHTML>
			</div>

			<RichText.Content
				tagName="p"
				className="customerquestion-title"
				value={customerquestionTitle}
			/>
		</div>
	);
};
export default save;
