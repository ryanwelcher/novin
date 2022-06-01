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
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
		attributes: { question, answer },
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="novin-gyik-container">
				<div className="novin-gyik-top">
					<RichText.Content
						className="novin-gyik-question"
						tagName="h3"
						value={question}
					/>
					<svg
						className="arrow"
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="11.115"
						viewBox="0 0 18 11.115"
					>
						<path
							id="Icon_material-keyboard-arrow-down"
							data-name="Icon material-keyboard-arrow-down"
							d="M11.115,11.76,18,18.63l6.885-6.87L27,13.875l-9,9-9-9Z"
							transform="translate(-9 -11.76)"
						/>
					</svg>
				</div>
				<div className="novin-gyik-bottom">
					<RichText.Content
						tagName="p"
						className="novin-gyik-answer"
						value={answer}
					/>
				</div>
			</div>
		</div>
	);
};

export default Save;
