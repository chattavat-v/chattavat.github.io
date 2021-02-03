import styled from "styled-components";

export const WrapperExperience = styled.div`
	padding: 4rem 0rem;
`;

export const ExperienceArea = styled.div`
	flex-wrap: wrap;
	display: flex;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const ExperienceItem = styled.div`
	width: 25%;
	padding: 0rem 0.5rem;
	cursor: pointer;
	transition: 0.5s;

	:hover {
		filter: brightness(1.1) drop-shadow(1px 8px 30px #b1afaf);
	}

	@media (max-width: 768px) {
		padding: 0rem 1rem;
		width: 100%;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 200px;
	border-radius: 5px;
`;

export const TitleArea = styled.div`
	margin-top: 1rem;
`;

export const TopicArea = styled.div`
	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const DescriptionArea = styled.div`
	letter-spacing: 1.5px;
	margin: 1rem auto;
	margin-left: 0px;
`;

export const CategoryArea = styled.div``;
