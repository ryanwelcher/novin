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
		attributes: { question, answer },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeQuestion = (value) => {
		setAttributes({ question: value });
	};
	const onChangeAnswer = (value) => {
		setAttributes({ answer: value });
	};

	return (
		<div {...blockProps}>
			<div className="novin-gyik-container">
				<div className="novin-gyik-top">
					<p>{__("Kérdés:", "novin-blocks")}</p>
					<RichText
						className="novin-gyik-question"
						tagName="h3"
						onChange={onChangeQuestion}
						value={question}
					/>
				</div>
				<div className="novin-gyik-bottom">
					<p>{__("Válasz:", "novin-blocks")}</p>
					<RichText
						tagName="p"
						className="novin-gyik-answer"
						onChange={onChangeAnswer}
						value={answer}
					/>
				</div>
			</div>
		</div>
	);
};
export default Edit;
