import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BackDropView = ({ handlerClick }) => {
	return <WrapperBackDrop onClick={handlerClick} />;
};

const WrapperBackDrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 100;
`;

BackDropView.propTypes = {
	handlerClick: PropTypes.func.isRequired,
};

export default BackDropView;
