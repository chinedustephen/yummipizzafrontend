import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import MenuCard from "components/MenuCard";
import { getQuery, postQuery } from "modules/query";
import apiUrl from "modules/endpoint";
import Loading from "components/loader";

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuList: [],
		};

		this.getMenu = this.getMenu.bind(this);
		this.addToCart = this.addToCart.bind(this);
	}

	getMenu() {
		getQuery(`${apiUrl}menus`)
			.then((data) => {
				this.setState({ menuList: data.body });
			})
			.then((error) => {});
	}

	addToCart(id) {
		let formData = new FormData();
		formData.append("menu_id", id);
		postQuery(`${apiUrl}add-to-cart`, formData)
			.then((data) => {})
			.then((error) => {});
	}

	componentDidMount() {
		this.getMenu();
	}

	render() {
		return (
			<Container className="container-body">
				<Row>
					{this.state.menuList.length > 0 ? (
						this.state.menuList.map((data) => (
							<MenuCard
								key={data.menu_id}
								data={data}
								addToCart={this.addToCart}
							/>
						))
					) : (
						<Loading />
					)}
				</Row>
			</Container>
		);
	}
}

export default Menu;
