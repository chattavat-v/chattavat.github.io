import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Side from "./SideStyle";
import * as utils from "./utils";
import { P } from "../../styles/Fonts";

const SideView = ({ onShowSideDrawer }) => {
	return (
		<Side.WrapperSide
			style={onShowSideDrawer ? Side.WrapperSideOpen : Side.WrapperSideClose}
		>
			<Side.ListNavigation>
				{utils.TopicLists.map((item) => (
					<Side.ListItem key={item._id}>
						<P>{item.label}</P>
					</Side.ListItem>
				))}
			</Side.ListNavigation>
		</Side.WrapperSide>
	);
};

SideView.propTypes = {
	onShowSideDrawer: PropTypes.bool.isRequired,
};

export default SideView;
