import React from "react";
import ContainerComp from "../../components/container-comp/ContainerComp";
import { P, H5, Strong } from "../../styles/Fonts";
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
import TopicComp from "../../components/topic-comp/TopicComp";

const WorkView = (props) => {
	return (
		<ContainerComp style={ImageBackground}>
			<WrapperCareer>
				<TopicArea>
					<TopicComp title={"Works"} />
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

export default WorkView;
