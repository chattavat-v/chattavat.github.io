import React from "react";
import PropTypes from "prop-types";
import * as utils from "./utils";
import ContainerComp from "../../components/container-comp/ContainerComp";
import CategoryComp from "../../components/category-comp/CategoryComp";
import {
	WrapperExperience,
	ExperienceArea,
	ExperienceItem,
	Image,
	TitleArea,
	TopicArea,
	DescriptionArea,
	CategoryArea,
} from "./ExperienceStyle";
import { H5, P } from "../../styles/Fonts";
// import { shuffle } from "../../utils/shuffle";
import TopicComp from "../../components/topic-comp/TopicComp";

const ExperienceView = ({ onClickExperience }) => {
	return (
		<ContainerComp>
			<WrapperExperience>
				<TopicArea>
					<TopicComp title={"Experiences"} />
					<DescriptionArea>
						<P>"Recently done project quality work"</P>
					</DescriptionArea>
				</TopicArea>
				<CategoryArea>
					<CategoryComp list={utils.listCategory} />
				</CategoryArea>
				<ExperienceArea className="filter-container">
					{utils.listExperience.map((item, index) => (
						<ExperienceItem
							key={index}
							className={`filter-item ${item.category}`}
							onClick={() => onClickExperience(item)}
						>
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

ExperienceView.propTypes = {
	onClickExperience: PropTypes.func.isRequired,
};

export default ExperienceView;
