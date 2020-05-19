import styled from "styled-components";
import colors from "../../styles/Colors";

export const WrapperHambureger = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;

export const ToggleButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 35px;
	width: 35px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	box-sizing: border-box;
	margin-bottom: 0.5rem;

	:focus {
		outline: none;
	}
`;

export const ToggleButtonLine = styled.div`
	width: 35px;
	height: 5px;
	border-radius: 5px;
	background: ${colors.sky};
`;
