import styled from "styled-components";
import colors from "../../styles/Colors";

export const WrapperAbout = styled.div`
	display: flex;
	padding: 4rem 0rem;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const TopicArea = styled.div`
	width: 25%;

	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`;

export const DescribeSkill = styled.div`
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

export const SkillArea = styled.div`
	width: 75%;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;

export const SkillGroup = styled.div`
	flex: 0 0 50%;
	max-width: 50%;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const ListDeatail = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	flex-wrap: wrap;
`;

export const DetailItem = styled.li`
	margin-right: 0.5rem;
`;

export const TextUpper = {
	textTransform: "uppercase",
};

export const Line = styled.div`
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		border-bottom: 1px solid ${colors.gray};
	}
`;
