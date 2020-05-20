import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "routes/route";
import * as serviceWorker from "./serviceWorker";
import Header from "components/header";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Routes />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
