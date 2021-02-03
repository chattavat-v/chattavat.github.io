import React from "react";
import PropTypes from "prop-types";
import {
	WrapperModal,
	ContentModal,
	Close,
	WrapperBody,
	ImageItem,
	Image,
	DescriptionItem,
	DetailItem,
	Ul,
	Li,
} from "./ModalStyle";
import { H5, P, Strong } from "../../styles/Fonts";

const ModalComp = ({ onCloseModal, experience }) => {
	return (
		<WrapperModal>
			<ContentModal>
				<Close onClick={() => onCloseModal(false)}>&times;</Close>
				{experience && (
					<WrapperBody>
						<ImageItem>
							<Image src={experience.image} alt={experience.image} />
						</ImageItem>
						<DescriptionItem>
							<H5>{experience.name}</H5>
							<P>{experience.title}</P>
							<DetailItem>
								<P>
									<Strong>Location:</Strong> {experience.location}
								</P>
								<P>
									<Strong>Year:</Strong> {experience.year}
								</P>
								<Ul>
									{experience.descriptions.map((item, index) => (
										<Li key={index}>
											<P>{item}</P>
										</Li>
									))}
								</Ul>
							</DetailItem>
						</DescriptionItem>
					</WrapperBody>
				)}
			</ContentModal>
		</WrapperModal>
	);
};

ModalComp.propTypes = {
	onCloseModal: PropTypes.func.isRequired,
	experience: PropTypes.object,
};

export default ModalComp;
