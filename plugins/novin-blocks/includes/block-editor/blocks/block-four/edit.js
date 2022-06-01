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
			outsourcingProcessTitle,
			outsourcingProcessDescription,
			outsourcingProcessTime,
			outsourcingProcessStep,
			mediaURL,
			mediaID,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: "novin-outsourcing-process-step",
	});

	const handleOutsourcingTitleChange = (value) => {
		setAttributes({ outsourcingProcessTitle: value });
	};

	const handleOutsourcingDescriptionChange = (value) => {
		setAttributes({ outsourcingProcessDescription: value });
	};

	const handleOutsourcingTimeChange = (value) => {
		setAttributes({ outsourcingProcessTime: value });
	};

	const handleOutsourcingStepChange = (value) => {
		setAttributes({ outsourcingProcessStep: value });
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
			<RichText
				tagName="p"
				className="outsourcing-step"
				onChange={handleOutsourcingStepChange}
				value={outsourcingProcessStep}
				placeholder={__("Outsourcing process step number", "novin-blocks")}
			/>
			<div className="outsourcing-inner">
				<div className="outsourcing-image">
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
				<div className="outsourcing-infos">
					<RichText
						tagName="h3"
						className="outsourcing-title"
						onChange={handleOutsourcingTitleChange}
						value={outsourcingProcessTitle}
						placeholder={__("Outsourcing cím", "novin-blocks")}
					/>
					<RichText
						tagName="p"
						className="outsourcing-description"
						onChange={handleOutsourcingDescriptionChange}
						value={outsourcingProcessDescription}
						placeholder={__("Outsourcing leírás", "novin-blocks")}
					/>
					<div className="outsourcing-footer">
						<svg
							class="time-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="27.025"
							height="27.671"
							viewBox="0 0 27.025 27.671"
						>
							<g
								id="Icon_feather-clock"
								data-name="Icon feather-clock"
								transform="translate(-1.5 -1.5)"
							>
								<path
									id="Path_3777"
									data-name="Path 3777"
									d="M27.025,15.336A12.177,12.177,0,0,1,15.013,27.671,12.177,12.177,0,0,1,3,15.336,12.177,12.177,0,0,1,15.013,3,12.177,12.177,0,0,1,27.025,15.336Z"
									fill="none"
									stroke="#000"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3"
								/>
								<path
									id="Path_3778"
									data-name="Path 3778"
									d="M18,9v9l6,3"
									transform="translate(-3.734 -1.776)"
									fill="none"
									stroke="#000"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3"
								/>
							</g>
						</svg>
						<RichText
							tagName="p"
							className="outsourcing-time"
							onChange={handleOutsourcingTimeChange}
							value={outsourcingProcessTime}
							placeholder={__(
								"Outsourcing lépés ideje(szövegesen)",
								"novin-blocks"
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Edit;
