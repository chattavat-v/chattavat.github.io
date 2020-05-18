import styled from "styled-components";
import colors from "../styles/Colors";

export const Capitalize = {
	textTransform: "capitalize",
};

export const Uppercase = {
	textTransform: "uppercase",
};

export const LowerCase = {
	textTransform: "lowercase",
};

export const P = styled.p`
	font-family: "Roboto-Regular";
	color: ${colors.text};
	margin-top: 0rem;
	margin-bottom: 1rem;
	font-size: 1rem;
`;

export const Span = styled.span`
	font-family: "Roboto-Regular";
	color: ${colors.text};
`;

export const Small = styled.small`
	font-family: "Roboto-Thin";
	color: ${colors.title};
	font-size: 0.75rem;
	letter-spacing: 2px;
`;

export const Strong = styled.strong`
	font-family: "Roboto-Bold";
`;

export const H1 = styled.h1`
	font-family: "Roboto-Bold";
	color: ${colors.title};
	font-size: 2.5rem;
`;

export const H2 = styled.h2`
	font-family: "Roboto-Bold";
	color: ${colors.title};
	font-size: 2rem;
`;

export const H3 = styled.h3`
	font-family: "Roboto-Bold";
	color: ${colors.title};
	font-size: 1.75rem;
`;

export const H4 = styled.h4`
	font-family: "Roboto-Bold";
	color: ${colors.title};
	font-size: 1.5rem;
`;

export const H5 = styled.h5`
	font-family: "Roboto-Bold";
	color: ${colors.title};
	font-size: 1.25rem;
`;
