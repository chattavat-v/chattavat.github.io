import React from "react";
import * as utils from "./utils";
import ContainerComp from "../../components/container-comp/ContainerComp";
import {
	WrapperExperience,
	ExperienceArea,
	ExperienceItem,
	Image,
	TitleArea,
	TopicArea,
	DescriptionArea,
} from "./ExperienceStyle";
import { H4, H5, P } from "../../styles/Fonts";
import { shuffle } from "../../utils/shuffle";

const ExperienceView = (props) => {
	return (
		<ContainerComp>
			<WrapperExperience>
				<TopicArea>
					<H4>Experiences</H4>
					<DescriptionArea>
						<P>"Recently done project quality work"</P>
					</DescriptionArea>
				</TopicArea>
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
			</WrapperExperience>
		</ContainerComp>
	);
};

export default ExperienceView;
