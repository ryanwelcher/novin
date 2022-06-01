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
			outsourcingProcessTitle,
			outsourcingProcessDescription,
			outsourcingProcessTime,
			outsourcingProcessStep,
			mediaURL,
		},
		setAttributes,
	} = props;

	const blockProps = useBlockProps.save({
		className: "novin-outsourcing-process-step",
	});

	return (
		<div {...blockProps}>
			<div className="outsourcing-line">
				<div className="top"></div>
				<div className="bottom"></div>
				<div className="circle"></div>
			</div>
			<RichText.Content
				tagName="p"
				className="outsourcing-step"
				value={outsourcingProcessStep}
			/>
			<div className="outsourcing-inner">
				<div className="outsourcing-image">
					{mediaURL && (
						<img
							src={mediaURL}
							alt={__(outsourcingProcessTitle, "novin-blocks")}
						/>
					)}
				</div>
				<div className="outsourcing-infos">
					<RichText.Content
						tagName="h3"
						className="outsourcing-title"
						value={outsourcingProcessTitle}
					/>
					<RichText.Content
						tagName="p"
						className="outsourcing-description"
						value={outsourcingProcessDescription}
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
						<RichText.Content
							tagName="p"
							className="outsourcing-time"
							value={outsourcingProcessTime}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Save;
