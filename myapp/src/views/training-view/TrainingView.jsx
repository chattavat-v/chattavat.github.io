import React from "react";
import ContainerComp from "../../components/container-comp/ContainerComp";
import { H4, H5, P, Strong } from "../../styles/Fonts";
import {
	WrapperTraining,
	TopicArea,
	DescriptionArea,
	TrainingArea,
	TrainItem,
	BgActive,
} from "./TrainingStyle";
import * as utils from "./utils";

const TrainingView = (props) => {
	return (
		<ContainerComp style={BgActive}>
			<WrapperTraining>
				<TopicArea>
					<H4>Trains</H4>
					<DescriptionArea>
						<P>"History of train me."</P>
					</DescriptionArea>
				</TopicArea>
				<TrainingArea>
					{utils.listTrains.map((train, index) => (
						<TrainItem key={index}>
							<H5>{train.name}</H5>
							<P>
								<Strong>Company: </Strong>
								{train.company}
							</P>
							<P>
								<Strong>Desciption: </Strong>
								{train.description}
							</P>
							<P>
								<Strong>Year: </Strong>
								{train.year}
							</P>
						</TrainItem>
					))}
				</TrainingArea>
			</WrapperTraining>
		</ContainerComp>
	);
};

export default TrainingView;
