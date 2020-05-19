import React from "react";
import PropTypes from "prop-types";
import * as Style from "./HamburegerStyle";

const HamburegerComp = ({ drawerToggleClickHandler }) => {
	return (
		<Style.WrapperHambureger>
			<Style.ToggleButton onClick={drawerToggleClickHandler}>
				<Style.ToggleButtonLine />
				<Style.ToggleButtonLine />
				<Style.ToggleButtonLine />
			</Style.ToggleButton>
		</Style.WrapperHambureger>
	);
};

HamburegerComp.propTypes = {
	drawerToggleClickHandler: PropTypes.func.isRequired,
};

export default HamburegerComp;
