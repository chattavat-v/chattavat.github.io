import React, { useState, Fragment } from "react";
import { Element, scroller } from "react-scroll";
import { ModalOpen, ModalDefault } from "./MainStyle";
import HeaderView from "../../views/header-view/HeaderView";
import SideView from "../../views/side-view/SideView";
import BackDropView from "../../views/backdrop-view/BackDropView";
import HomeView from "../../views/home-view/HomeView";
import AboutView from "../../views/about-view/AboutView";
import TrainingView from "../../views/training-view/TrainingView";
import WorkView from "../../views/work-view/WorkView";
import ExperinceView from "../../views/experience-view/ExperienceView";
import ContactView from "../../views/contact-view/ContactView";
import FooterView from "../../views/footer-view/FooterView";
import ModalComp from "../../components/modal-comp/ModalComp";

const MainScreen = (props) => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const [isExperience, setIsExperience] = useState(null);

	const pathToScroll = (path) => {
		scroller.scrollTo(path, {
			duration: 1500,
			delay: 50,
			smooth: true,
			offset: -75,
		});
	};

	const onHandleExperience = (item) => {
		setIsModal(true);
		setIsExperience(item);
	};

	const onSetModal = (item) => setIsModal(item);

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
			<div style={isModal ? ModalOpen : ModalDefault}>
				<ModalComp onCloseModal={onSetModal} experience={isExperience} />
			</div>
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
				<ExperinceView onClickExperience={onHandleExperience} />
			</Element>
			<Element name="contact">
				<ContactView />
			</Element>
			<FooterView />
		</Fragment>
	);
};

export default MainScreen;
