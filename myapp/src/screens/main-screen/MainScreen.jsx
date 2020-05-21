import React, { useState } from "react";
import { Element, scroller } from "react-scroll";
import HeaderView from "../../views/header-view/HeaderView";
import SideView from "../../views/side-view/SideView";
import BackDropView from "../../views/backdrop-view/BackDropView";

const MainScreen = (props) => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const pathToScroll = (path) => {
		scroller.scrollTo(path, {
			duration: 1500,
			delay: 50,
			smooth: true,
			offset: -75,
		});
	};

	return (
		<>
			<HeaderView
				drawerToggleClickHandler={() => setSideDrawerOpen(!sideDrawerOpen)}
				onpathScroll={pathToScroll}
			/>
			<SideView onShowSideDrawer={sideDrawerOpen} />
			{sideDrawerOpen && (
				<BackDropView handlerClick={() => setSideDrawerOpen(false)} />
			)}
			<Element name="home">
				<div style={{ height: "200vh", textAlign: "center" }}>Hello</div>
			</Element>
			<Element name="about">
				<div style={{ height: "200vh", textAlign: "center" }}>Hello</div>
			</Element>
			<Element name="training">
				<div style={{ height: "200vh", textAlign: "center" }}>Hello</div>
			</Element>
			<Element name="career">
				<div style={{ height: "200vh", textAlign: "center" }}>Hello</div>
			</Element>
			<Element name="project">
				<div style={{ height: "200vh", textAlign: "center" }}>Hello</div>
			</Element>
			<Element name="experience">
				<div style={{ height: "200vh", textAlign: "center" }}>Hello</div>
			</Element>
			<Element name="contact">
				<div style={{ height: "200vh", textAlign: "center" }}>Hello</div>
			</Element>
		</>
	);
};

export default MainScreen;
