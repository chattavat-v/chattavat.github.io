import styled from "styled-components";
import colors from "../../styles/Colors";

export const WrapperModal = styled.div`
	position: fixed;
	z-index: 1024;
	padding-top: 100px;
	padding-bottom: 1.5rem;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);
`;

export const ContentModal = styled.div`
	position: relative;
	background-color: ${colors.light};
	border-radius: 5px;
	margin: auto;
	padding: 1rem;
	width: 90%;
`;

export const Close = styled.span`
	position: absolute;
	color: #aaaaaa;
	float: right;
	font-size: 2rem;
	font-weight: bold;
	top: 0;
	right: 15px;

	:hover,
	:focus {
		color: ${colors.darkgray};
		cursor: pointer;
		text-decoration: none;
	}
`;

export const WrapperBody = styled.div`
	display: flex;
	margin-top: 2rem;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const ImageItem = styled.div`
	width: 50%;

	@media (max-width: 768px) {
		width: 100%;
		margin-bottom: 1rem;
	}
`;

export const Image = styled.img`
	width: 100%;
	border-radius: 5px;
`;

export const DescriptionItem = styled.div`
	width: 50%;
	text-align: center;
	padding: 0rem 0.5rem;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const DetailItem = styled.div`
	text-align: left;
	padding: 0rem 0.5rem;

	@media (max-width: 768px) {
		padding: 0rem;
	}
`;

export const Ul = styled.ul`
	color: ${colors.darkgray};
	font-size: 1rem;
	padding-left: 0.25rem;
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

	p {
		margin-bottom: 0.5rem;
	}
`;
