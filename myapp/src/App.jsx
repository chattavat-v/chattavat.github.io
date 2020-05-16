import React from "react";
import "./App.css";
import GlobalFonts from "./fonts/Roboto/fonts";
import * as fonts from "./styles/Fonts";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<GlobalFonts />
				<fonts.blck>Hello black</fonts.blck>
				<fonts.blackItalic>Hello blackItalic</fonts.blackItalic>
				<fonts.bold>Hello bold</fonts.bold>
				<fonts.boldItalic>Hello boldItalic</fonts.boldItalic>
				<fonts.Italic>Hello Italic</fonts.Italic>
				<fonts.light>Hello light</fonts.light>
				<fonts.lightItalic>Hello lightItalic</fonts.lightItalic>
				<fonts.medium>Hello medium</fonts.medium>
				<fonts.mediumItalic>Hello mediumItalic</fonts.mediumItalic>
				<fonts.regular>Hello regular</fonts.regular>
				<fonts.thin>Hello thin</fonts.thin>
				<fonts.thinItalic>Hello thinItalic</fonts.thinItalic>
			</header>
		</div>
	);
};

export default App;
