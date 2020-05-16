import React from "react";
import * as Global from "./styles/Global";
import * as fonts from "./styles/Fonts";

const App = () => {
	return (
		<div style={{ fontSize: "calc(10px + 2vmin)" }}>
			<Global.GlobalStyle />
			<Global.GlobalFonts />
			<fonts.P>
				<fonts.Strong>Strong</fonts.Strong>
				ดีจ้าาาาา String
			</fonts.P>
			<fonts.Strong>Strong 1234</fonts.Strong>
			<fonts.P>ดีจ้าาาาา hello</fonts.P>
			<fonts.Small>Hello Small</fonts.Small>
			<fonts.Span>Hello Span</fonts.Span>
			<fonts.H1>Hello H1</fonts.H1>
			<fonts.H2>Hello H2</fonts.H2>
			<fonts.H3>Hello H3</fonts.H3>
			<fonts.H4>Hello H4</fonts.H4>
			<fonts.H5>Hello H5</fonts.H5>
		</div>
	);
};

export default App;
