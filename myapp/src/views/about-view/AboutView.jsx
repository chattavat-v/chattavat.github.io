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
	TextTitle,
} from "./AboutStyle";
import { H4, H5, P } from "../../styles/Fonts";

const AboutView = () => {
	return (
		<ContainerComp>
			<WrapperAbout>
				<TopicArea>
					<H4>My Skills</H4>
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
