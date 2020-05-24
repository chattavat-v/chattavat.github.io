import styled from "styled-components";
import { ImageBanner } from "../../styles/Image";
import colors from "../../styles/Colors";

export const WrapperHome = styled.div`
	margin-top: 90px;
	background-image: url(${ImageBanner});
	background-size: cover;
	height: 100%;
	display: flex;

	@media (max-width: 768px) {
		display: block;
		height: 100%;
	}
`;

export const ImageArea = styled.div`
	width: 40%;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ImageItem = styled.img`
	width: 100%;
	border-radius: 50%;
	padding: 1rem 8rem;

	@media (max-width: 768px) {
		padding: 0.5rem 4rem;
	}
`;

export const DescriptionArea = styled.div`
	position: relative;
	width: 60%;
	padding: 1rem;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const TopicArea = styled.div`
	display: flex;
	width: 100%;
`;

export const Line = styled.div`
	width: 60%;
	height: 2px;
	border-radius: 5px;
	background: black;
	margin-top: 1.4rem;
	margin-left: 1rem;

	@media (max-width: 768px) {
		width: 55%;
	}
`;

export const SubDescription = styled.div`
	margin-top: 3rem;
	text-align: center;
	letter-spacing: 1px;
	width: 100%;

	@media (max-width: 768px) {
		margin-top: 1rem;
	}
`;

export const Position = {
	textAlign: "center",
	fontSize: "1.5rem",
	letterSpacing: "5px",
	marginBottom: "2rem",
};

export const WrapperAbout = styled.div`
	width: 50%;
	margin: auto;
	color: ${colors.title};

	@media (max-width: 768px) {
		width: 90%;
	}
`;
