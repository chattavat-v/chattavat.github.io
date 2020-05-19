import React, { useState } from "react";
import PropTypes from "prop-types";
import HeaderView from "../../views/header-view/HeaderView";
import SideView from "../../views/side-view/SideView";

const MainScreen = (props) => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	return (
		<>
			<HeaderView
				drawerToggleClickHandler={() => setSideDrawerOpen(!sideDrawerOpen)}
			/>
			<SideView onShowSideDrawer={sideDrawerOpen} />
			<div style={{ height: "200vh" }}></div>
		</>
	);
};

MainScreen.propTypes = {};

export default MainScreen;
