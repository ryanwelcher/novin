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

	const blockProps = useBlockProps({
		className: "novin-expert",
	});

	const handleExpertTitleChange = (value) => {
		setAttributes({ expertTitle: value });
	};

	const handleExpertDescriptionChange = (value) => {
		setAttributes({ expertDescription: value });
	};

	const handleExpertSkillsChange = (value) => {
		setAttributes({ expertSkills: value });
	};

	const handleExpertPriceChange = (value) => {
		setAttributes({ expertPrice: value });
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
			<div className="expert-header">
				<RichText
					tagName="h3"
					className="expert-title"
					onChange={handleExpertTitleChange}
					value={expertTitle}
					placeholder={__("Szak??rt?? megnevez??se", "novin-blocks")}
				/>
				<RichText
					tagName="p"
					className="expert-price"
					onChange={handleExpertPriceChange}
					value={expertPrice}
					placeholder={__("Szak??rt?? ??ra(sz??vegesen)", "novin-blocks")}
				/>
			</div>
			<RichText
				tagName="p"
				className="expert-description"
				onChange={handleExpertDescriptionChange}
				value={expertDescription}
				placeholder={__("Szak??rt?? r??szletes le??r??s", "novin-blocks")}
			/>
			<RichText
				tagName="ul"
				multiline="li"
				className="expert-skills"
				onChange={handleExpertSkillsChange}
				value={expertSkills}
				placeholder={__("Szak??rt?? k??pess??gei ENTER-rel ??j sor", "novin-blocks")}
			/>
			<div className="expert-image">
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
										alt={__("Upload Expert Image", "novin-blocks")}
									/>
								</>
							)}
						</Button>
					)}
				/>
			</div>
		</div>
	);
};

export default Edit;
