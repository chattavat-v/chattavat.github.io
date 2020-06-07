import styled from "styled-components";
import colors from "../../styles/Colors";
import { ImageFooter } from "../../styles/Image";

export const ImageBackground = {
	backgroundImage: `url(${ImageFooter})`,
	backgroundSize: "cover",
};

export const WrapperCareer = styled.div`
	display: flex;
	margin: 1rem auto;
	padding: 4rem 0rem;

	@media (max-width: 768px) {
		display: block;
		padding: 2rem 0rem;
	}
`;

export const TopicArea = styled.div`
	width: 40%;

	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`;

export const DescriptionArea = styled.div`
	display: flex;
	width: 80%;
	letter-spacing: 1.5px;
	margin: 1rem auto;
	margin-left: 0px;

	@media (max-width: 768px) {
		margin: auto;
		margin-bottom: 0.5rem;
		width: 100%;
	}
`;

export const DetailWork = styled.div`
	width: 60%;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;

export const WorkItem = styled.div`
	width: 100%;
	background: #ffffff;
	padding: 1rem;
	border-radius: 10px;
	margin-bottom: 1rem;
	transition: all 0.3s linear 0s;

	:hover {
		box-shadow: ${colors.box_shadow};
	}
`;

export const Ul = styled.ul`
	color: ${colors.darkgray};
	font-size: 1rem;
`;

export const Li = styled.li`
	list-style-type: none;
	position: relative;
	padding-left: 30px;

	:before {
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		border: 2px solid #87ceeb;
		background: #fff;
		top: 8px;
		left: 0px;
		border-radius: 50%;
	}
`;
