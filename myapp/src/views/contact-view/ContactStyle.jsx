import styled from "styled-components";
import colors from "../../styles/Colors";

export const BgActive = {
	background: colors.lightsky,
};

export const WrapperContact = styled.div`
	display: flex;
	padding: 4rem 0rem;

	@media (max-width: 768px) {
		display: block;
		padding: 2rem 0rem;
	}
`;

export const TopicArea = styled.div`
	width: 25%;

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
		justify-content: center;
		margin: auto;
		margin-bottom: 0.5rem;
		width: 100%;
	}
`;

export const DetailContact = styled.div`
	width: 75%;
	display: flex;
	flex-wrap: wrap;
	text-align: center;

	> div {
		padding: 0.5rem;
	}

	h3 {
		margin-bottom: 1.5rem;
	}

	@media (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;

export const PhoneItem = styled.div`
	width: 33%;
	background-color: #fff;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const LocationItem = styled.div`
	width: 33%;
	background-color: ${colors.sky};

	p,
	h3 {
		color: #fff;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const EmailItem = styled.div`
	width: 33%;
	background-color: #fff;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
