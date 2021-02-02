import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Global from "./styles/Global";
import MainScreen from "./screens/main-screen/MainScreen";

const App = () => {
	return (
		<Fragment>
			<Router>
				<Global.GlobalStyle />
				<Global.GlobalFonts />
				<Switch>
					<Route exact path="/" component={MainScreen} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
