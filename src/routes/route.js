import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "pages/menu";
import Cart from "pages/cart";
import Checkout from "pages/checkout";

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/checkout" component={Checkout} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
