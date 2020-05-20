import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "pages/menu";
import Cart from "pages/cart";

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/" component="" />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
