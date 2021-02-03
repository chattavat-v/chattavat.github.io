import React from "react";
import { H2, P, Capitalize } from "../../styles/Fonts";
import {
	WrapperFooter,
	WrapperLogo,
	WrapperDescription,
	LastNameItem,
} from "./FooterStyle";

const FooterView = (props) => {
	return (
		<WrapperFooter>
			<WrapperLogo>
				<H2 style={Capitalize}>chattavat.</H2>
				<H2 style={LastNameItem}>V</H2>
			</WrapperLogo>
			<WrapperDescription>
				<P>© 2020 Chattavat Vattanasiri. All rights reserved.</P>
			</WrapperDescription>
		</WrapperFooter>
	);
};

export default FooterView;
