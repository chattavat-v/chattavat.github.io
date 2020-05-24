import React from "react";
import { WrapperArea, WrapperBody } from "./ContainerStyle";

const ContainerComp = (props) => {
	return (
		<WrapperArea {...props}>
			<WrapperBody>{props.children}</WrapperBody>
		</WrapperArea>
	);
};

export default ContainerComp;
