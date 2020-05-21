import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import * as Header from "./HeaderStyle";
import * as utils from "./utils";
import { H2, P, Capitalize } from "../../styles/Fonts";
import HamburgerComp from "../../components/hamburger-comp/HamburegerComp";

const HeaderView = ({ drawerToggleClickHandler, onpathScroll }) => {
	const [isScroller, setIsScroller] = useState(window.scrollY);
	const [isWrapperHeader, setIsWrapperHeader] = useState(Header.InitialHeader);

	const scrollHandler = useCallback(() => {
		setIsScroller(window.scrollY);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);

		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, [scrollHandler]);

	useEffect(() => {
		isScroller > 100
			? setIsWrapperHeader(Header.ScrollerHeader)
			: setIsWrapperHeader(Header.InitialHeader);
	}, [isScroller]);

	return (
		<Header.WrapperHeader style={isWrapperHeader}>
			<Header.InlineHeader>
				<Header.WrapperLogo>
					<H2 style={Capitalize}>{utils.FirstName}</H2>
					<H2 style={Header.LastNameItem}>{utils.LastName}</H2>
				</Header.WrapperLogo>
				<Header.WrapperNavigation>
					<HamburgerComp drawerToggleClickHandler={drawerToggleClickHandler} />
					<Header.ListNavigation>
						{utils.TopicLists.map((item) => (
							<Header.ListItem key={item._id}>
								<P
									style={Header.LabelItem}
									onClick={() => onpathScroll(item.label)}
								>
									{item.label}
								</P>
							</Header.ListItem>
						))}
					</Header.ListNavigation>
				</Header.WrapperNavigation>
			</Header.InlineHeader>
		</Header.WrapperHeader>
	);
};

HeaderView.propTypes = {
	drawerToggleClickHandler: PropTypes.func.isRequired,
	onpathScroll: PropTypes.func.isRequired,
};

export default HeaderView;
