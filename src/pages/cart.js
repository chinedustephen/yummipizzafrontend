import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "redux/actions/index";
import fetchCart from "actions/fetchCart";
import CartCard from "components/cartCard";
import { putQuery, deleteQuery } from "modules/query";
import apiUrl from "modules/endpoint";
import AlertCard from "components/alertCard";

class Cart extends Component {
	constructor(props) {
		super(props);

		this.deleteCartItem = this.deleteCartItem.bind(this);
		this.updateCartItem = this.updateCartItem.bind(this);
	}

	deleteCartItem(id) {
		deleteQuery(`${apiUrl}delete-cart/${id}`)
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

	updateCartItem(event, id) {
		event.preventDefault();
		let formData = { quantity: event.target[0].value };

		putQuery(`${apiUrl}update-cart/${id}`, formData)
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
		fetchCart(this.props.actions.cart);
	}
	render() {
		return (
			<Container className="container-body">
				<AlertCard />
				<Row style={{ marginBottom: "20px" }}>
					<Col>
						<Card className="shadowed-card">
							<Card.Header>Cart</Card.Header>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						{this.props.cart.cart.length > 0 ? (
							this.props.cart.cart.map((data) => {
								return (
									<CartCard
										key={data.cart_id}
										data={data}
										deleteCart={this.deleteCartItem}
										updateCart={this.updateCartItem}
									/>
								);
							})
						) : (
							<Card>
								<Card.Body>
									<Card.Text>No item found</Card.Text>
								</Card.Body>
							</Card>
						)}
					</Col>
				</Row>

				<Row style={{ marginTop: "20px" }}>
					<Col>
						<Nav.Link href="/" className="float-left">
							<Button variant="secondary" size="sm">
								Continue Shoping
							</Button>
						</Nav.Link>

						{this.props.cart.cart.length > 0 ? (
							<Nav.Link href="/checkout" className="float-left">
								<Button variant="secondary" size="sm">
									Proceed to Checkout
								</Button>
							</Nav.Link>
						) : (
							""
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

const matchStateToProp = (state) => {
	return { alert: state.alert, cart: state.cart };
};

const matchActionToProp = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(matchStateToProp, matchActionToProp)(Cart);
