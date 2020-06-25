import React from "react";
import ContainerComp from "../../components/container-comp/ContainerComp";
import * as utils from "./utils";
import {
	WrapperAbout,
	TopicArea,
	DescribeSkill,
	SkillArea,
	SkillGroup,
	ListDeatail,
	DetailItem,
	TextUpper,
	Line,
} from "./AboutStyle";
import { H5, P } from "../../styles/Fonts";
import TopicComp from "../../components/topic-comp/TopicComp";

const AboutView = () => {
	return (
		<ContainerComp>
			<WrapperAbout>
				<TopicArea>
					<TopicComp title={"My Skills"} />
					<DescribeSkill>
						<P>
							"This is my skills to use in jobs and works. All skills involve
							working on hardware, machine, interface, web application, mobile
							app and others."
						</P>
					</DescribeSkill>
				</TopicArea>
				<SkillArea>
					{utils.listSkill.map((skill, index) => (
						<SkillGroup key={index}>
							<H5 style={TextUpper}>{skill.type}</H5>
							<Line />
							<ListDeatail>
								{skill.details.map((detail, index) => (
									<DetailItem key={index}>
										{skill.details.length - 1 === index ? (
											<P>{`${detail}`}</P>
										) : (
											<P>{`${detail},`}</P>
										)}
									</DetailItem>
								))}
							</ListDeatail>
						</SkillGroup>
					))}
				</SkillArea>
			</WrapperAbout>
		</ContainerComp>
	);
};

export default AboutView;
