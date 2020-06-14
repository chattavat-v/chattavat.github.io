import styled from "styled-components";

export const WrapperMap = styled.div``;

export const MapArea = styled.div`
	height: 250px;
	width: 100%;
`;

export const Marker = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin: -35px -10px;
	border: solid 5px #007bff;
	cursor: pointer;
	overflow: hidden;

	:after {
		top: -3px;
		left: 5px;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;

		border-color: rgba(136, 183, 213, 0);
		border-top-color: #007bff;
		border-width: 10px;
		margin-left: -7px;
	}
`;
