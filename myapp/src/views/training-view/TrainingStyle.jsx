import styled from "styled-components";
import colors from "../../styles/Colors";

export const WrapperTraining = styled.div`
	display: flex;
	margin: 1rem auto;
	padding: 4rem 0rem;

	@media (max-width: 768px) {
		display: block;
		padding: 2rem 0rem;
	}
`;

export const BgActive = {
	background: colors.lightsky,
};

export const TopicArea = styled.div`
	width: 25%;

	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`;

export const DescriptionArea = styled.div`
	width: 80%;
	letter-spacing: 1.5px;
	margin: 1rem auto;
	margin-left: 0px;

	@media (max-width: 768px) {
		margin: auto;
		margin-bottom: 2.5rem;
		width: 100%;
	}
`;

export const TrainingArea = styled.div`
	width: 75%;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;

export const TrainItem = styled.div`
	width: 48%;
	background: #ffffff;
	padding: 1rem;
	border-radius: 10px;
	margin: 0 0.5rem 0.5rem 0;
	transition: all 0.3s linear 0s;
	box-shadow: ${colors.box_shadow};

	:hover {
		box-shadow: none;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;
