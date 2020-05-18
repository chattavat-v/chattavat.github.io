import styled from "styled-components";
import colors from "../../styles/Colors";
import { Capitalize, Uppercase } from "../../styles/Fonts";

export const WrapperHeader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: ${colors.white};
	height: 90px;
	z-index: 2048;
	transition: 0.5s;
`;

export const InitialHeader = {
	boxShadow: colors.shadow,
};

export const ScrollerHeader = {
	position: "fixed",
	height: "70px",
	boxShadow: colors.box_shadow,
};

export const InlineHeader = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	margin: auto 1rem;
`;

export const WrapperLogo = styled.div`
	display: flex;
`;

export const LastNameItem = {
	textTransform: "uppercase",
	color: colors.sky,
};

export const WrapperNavigation = styled.div``;

export const ListNavigation = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const ListItem = styled.li`
	margin: auto 1rem;
	text-transform: uppercase;
	transition: transform 0.2s;

	:focus {
		outline: none;
	}

	:active,
	:hover {
		transform: scale(1.2);
	}
`;

export const LabelItem = {
	marginBottom: "0px",
	cursor: "pointer",
	textDecoration: "none",
};
