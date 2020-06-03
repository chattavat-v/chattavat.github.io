import React from "react";
import PropTypes from "prop-types";
import ContainerComp from "../../components/container-comp/ContainerComp";
import { H4, P, H5, Strong } from "../../styles/Fonts";
import {
	ImageBackground,
	WrapperCareer,
	TopicArea,
	DescriptionArea,
	DetailWork,
	WorkItem,
	Ul,
	Li,
} from "./WorkStyle";
import { calculateYearOfWork, listWork } from "./utils";

const WorkView = (props) => {
	return (
		<ContainerComp style={ImageBackground}>
			<WrapperCareer>
				<TopicArea>
					<H4>Works</H4>
					<DescriptionArea>
						<P>"{calculateYearOfWork()} Years Experience Working"</P>
					</DescriptionArea>
				</TopicArea>
				<DetailWork>
					{listWork.map((item, index) => (
						<WorkItem key={index}>
							<H5>{item.name}</H5>
							<P>{item.date}</P>
							<P>
								<Strong>Position: </Strong>
								{item.position}
							</P>
							<P>
								<Strong>Descriptions: </Strong>
							</P>
							<Ul>
								{item.description.map((data, index) => (
									<Li key={index}>{data}</Li>
								))}
							</Ul>
						</WorkItem>
					))}
				</DetailWork>
			</WrapperCareer>
		</ContainerComp>
	);
};

WorkView.propTypes = {};

export default WorkView;
