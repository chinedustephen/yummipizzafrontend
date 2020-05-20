import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "routes/route";
import * as serviceWorker from "./serviceWorker";
import Header from "components/header";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducers from "redux/reducers/index";

const store = createStore(combineReducers);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Header />
			<Routes />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
