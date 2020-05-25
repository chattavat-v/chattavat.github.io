import React from "react";
import PropTypes from "prop-types";
import * as Side from "./SideStyle";
import * as utils from "./utils";
import { P } from "../../styles/Fonts";

const SideView = ({
	onShowSideDrawer,
	drawerToggleClickHandler,
	onpathScroll,
}) => {
	const onSelectTopic = (label) => {
		drawerToggleClickHandler();
		onpathScroll(label);
	};

	return (
		<Side.WrapperSide
			style={onShowSideDrawer ? Side.WrapperSideOpen : Side.WrapperSideClose}
		>
			<Side.ListNavigation>
				{utils.TopicLists.map((item) => (
					<Side.ListItem key={item._id}>
						<P onClick={() => onSelectTopic(item.label)}>{item.label}</P>
					</Side.ListItem>
				))}
			</Side.ListNavigation>
		</Side.WrapperSide>
	);
};

SideView.propTypes = {
	onShowSideDrawer: PropTypes.bool.isRequired,
	drawerToggleClickHandler: PropTypes.func.isRequired,
	onpathScroll: PropTypes.func.isRequired,
};

export default SideView;
