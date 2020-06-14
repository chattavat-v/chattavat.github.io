import React, { useState, Fragment } from "react";
import { Element, scroller } from "react-scroll";
import HeaderView from "../../views/header-view/HeaderView";
import SideView from "../../views/side-view/SideView";
import BackDropView from "../../views/backdrop-view/BackDropView";
import HomeView from "../../views/home-view/HomeView";
import AboutView from "../../views/about-view/AboutView";
import TrainingView from "../../views/training-view/TrainingView";
import WorkView from "../../views/work-view/WorkView";
import ExperinceView from "../../views/experience-view/ExperienceView";
import ContactView from "../../views/contact-view/ContactView";

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
		<Fragment>
			<HeaderView
				drawerToggleClickHandler={() => setSideDrawerOpen(!sideDrawerOpen)}
				onpathScroll={pathToScroll}
			/>
			<SideView
				onShowSideDrawer={sideDrawerOpen}
				onpathScroll={pathToScroll}
				drawerToggleClickHandler={() => setSideDrawerOpen(false)}
			/>
			{sideDrawerOpen && (
				<BackDropView handlerClick={() => setSideDrawerOpen(false)} />
			)}
			<Element name="home">
				<HomeView />
			</Element>
			<Element name="about">
				<AboutView />
			</Element>
			<Element name="training">
				<TrainingView />
			</Element>
			<Element name="work">
				<WorkView />
			</Element>
			<Element name="experience">
				<ExperinceView />
			</Element>
			<Element name="contact">
				<ContactView />
			</Element>
		</Fragment>
	);
};

export default MainScreen;
