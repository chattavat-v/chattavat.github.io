import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../styles/Colors";

const TopicComp = ({ title }) => {
	return (
		<Wrapper>
			<span>{title.slice(0, title.length - 1)}</span>
			<span style={{ color: colors.sky }}>
				{title.slice(title.length - 1, title.length)}
			</span>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	font-family: "Roboto-Bold";
	color: ${colors.title};
	font-size: 1.5rem;
`;

TopicComp.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TopicComp;
