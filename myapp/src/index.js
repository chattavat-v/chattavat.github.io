import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/umd/popper.min.js";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
