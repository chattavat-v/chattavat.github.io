import React from "react";
import PropTypes from "prop-types";
import HeaderView from "../../views/header-view/HeaderView";

const MainScreen = (props) => {
	return (
		<>
			<HeaderView />
			<div style={{ height: "200vh" }}>Hello</div>
		</>
	);
};

MainScreen.propTypes = {};

export default MainScreen;
