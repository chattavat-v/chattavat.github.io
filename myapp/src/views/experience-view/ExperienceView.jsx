import React from "react";
import * as utils from "./utils";
import ContainerComp from "../../components/container-comp/ContainerComp";
import {
	ExperienceArea,
	ExperienceItem,
	Image,
	TitleArea,
} from "./ExperienceStyle";
import { H5, P } from "../../styles/Fonts";
import { shuffle } from "../../utils/shuffle";

const ExperienceView = (props) => {
	return (
		<ContainerComp>
			Hello experience
			<ExperienceArea>
				{shuffle(utils.listExperience).map((item, index) => (
					<ExperienceItem key={index}>
						<Image src={item.image} alt="" />
						<TitleArea>
							<H5>{item.name}</H5>
							<P>{item.location}</P>
						</TitleArea>
					</ExperienceItem>
				))}
			</ExperienceArea>
		</ContainerComp>
	);
};

export default ExperienceView;
