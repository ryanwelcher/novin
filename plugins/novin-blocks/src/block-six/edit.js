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
	InspectorControls,
	RichText,
	ColorPalette, //if you call the color pallete from the editor, your palette's colors will come from the default which is either in theme.json or in your functions.php add_theme_support('editor-color-palette', array(....))
} from "@wordpress/block-editor";

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
			customerquestionIcon,
			customerquestionTitle,
			customerquestionIconBgColor,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: "novin-customer-block",
	});

	const handlecustomerquestionTitleChange = (value) => {
		setAttributes({ customerquestionTitle: value });
	};
	const handlecustomerquestionIconChange = (value) => {
		setAttributes({ customerquestionIcon: value });
	};

	const onChangeBackgroundcolor = (value) => {
		setAttributes({ customerquestionIconBgColor: value });
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody
					title={__("Szolgáltatás blokk színbeállítások", "novin-blocks")}
					initialOpen={true}
					className="novin-colors-panel"
				>
					<PanelRow>
						{__("Icon háttérszíne:", "novin-blocks")}
						<ColorIndicator colorValue={customerquestionIconBgColor} />
					</PanelRow>
					<ColorPalette
						value={customerquestionIconBgColor}
						onChange={onChangeBackgroundcolor}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				className="customerquestion-icon"
				style={{ backgroundColor: customerquestionIconBgColor }}
			>
				<TextareaControl
					value={customerquestionIcon}
					onChange={handlecustomerquestionIconChange}
					placeholder={__("Write SVG code here as HTML…", "novin-blocks")}
					aria-label={__("HTML")}
					rows="6" //default is 4
				/>
			</div>
			<RichText
				tagName="p"
				className="customerquestion-title"
				onChange={handlecustomerquestionTitleChange}
				value={customerquestionTitle}
				placeholder={__("Ügyfél gyakori kérdése", "novin-blocks")}
			/>
		</div>
	);
};

export default Edit;
