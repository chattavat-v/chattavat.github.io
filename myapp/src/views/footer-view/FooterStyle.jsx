import styled from "styled-components";
import colors from "../../styles/Colors";

export const LastNameItem = {
	textTransform: "uppercase",
	color: colors.sky,
};

export const WrapperFooter = styled.div`
	display: flex;
	justify-content: space-between;
	margin: auto 1rem;
	padding: 1rem 0rem;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const WrapperLogo = styled.div`
	display: flex;

	h2 {
		margin: auto;
	}

	@media (max-width: 768px) {
		justify-content: center;

		h2 {
			margin: 0rem;
		}
	}
`;

export const WrapperDescription = styled.div`
	p {
		margin: 0rem;
		margin-top: 0.5rem;
	}

	@media (max-width: 768px) {
		text-align: center;
	}
`;
