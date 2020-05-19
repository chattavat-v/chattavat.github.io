import styled from "styled-components";
import colors from "../../styles/Colors";

export const WrapperSide = styled.div`
	height: 80%;
	background: ${colors.white};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 200;
	transition: transform 0.5s ease-out;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const WrapperSideClose = {
	transform: "translateY(-100%)",
};

export const WrapperSideOpen = {
	transform: "translateY(18%)",
	boxShadow: colors.box_shadow,
};

export const ListNavigation = styled.ul`
	text-transform: uppercase;
	height: 100%;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 0px;
`;

export const ListItem = styled.li`
	text-align: center;
	transition: transform 0.2s;
	margin: 0.5rem 0;
`;
