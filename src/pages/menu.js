import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import MenuCard from "components/MenuCard";
import { getQuery, postQuery } from "modules/query";
import apiUrl from "modules/endpoint";
import Loading from "components/loader";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "redux/actions/index";
import AlertCard from "components/alertCard";
import fetchCart from "actions/fetchCart";

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
			.catch((error) => {
				this.props.actions.alert({ show: true, ...error });
			});
	}

	addToCart(id) {
		let formData = new FormData();
		formData.append("menu_id", id);
		postQuery(`${apiUrl}add-to-cart`, formData)
			.then((data) => {
				this.props.actions.alert({
					show: true,
					status: data.status,
					message: data.message,
				});
				fetchCart(this.props.actions.cart);
			})
			.catch((error) => {
				this.props.actions.alert({ show: true, ...error });
			});
	}

	componentDidMount() {
		this.getMenu();
		fetchCart(this.props.actions.cart);
	}

	render() {
		return (
			<Container className="container-body">
				<AlertCard />
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

const matchStateToProps = (state) => {
	return { alert: state.alert, cart: state.cart };
};

const matchActionsToProps = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(matchStateToProps, matchActionsToProps)(Menu);
