import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	Card,
	Table,
	Button,
	Nav,
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "redux/actions/index";
import fetchCart from "actions/fetchCart";
import { postQuery } from "modules/query";
import apiUrl from "modules/endpoint";
import AlertCard from "components/alertCard";
import AlertInput from "components/alertInput";

class Checkout extends Component {
	componentDidMount() {
		fetchCart(this.props.actions.cart);
	}

	confirmOrder(event) {
		event.preventDefault();
		let formData = new FormData(event.target);
		postQuery(`${apiUrl}place-order`, formData)
			.then((data) => {
				this.props.actions.alert({ show: true, ...data });
				fetchCart(this.props.actions.cart);
			})
			.catch((error) => {
				this.props.actions.alert({ show: true, ...error });
			});
	}

	render() {
		return (
			<Container className="container-body">
				<Row>
					<AlertCard />
					<Col sm={5}>
						<Card>
							<Card.Header>Order Summary</Card.Header>
							<Table hover size="lg">
								<thead>
									<tr>
										<th>Product</th>
										<th>Quantity</th>
										<th>Price</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{this.props.cart.cart.length > 0 ? (
										this.props.cart.cart.map((data) => {
											return (
												<tr key={data.cart_id}>
													<td>{data.menu_name}</td>
													<td>{data.cart_quantity}</td>
													<td>{data.menu_price}</td>
													<td>{data.cart_quantity * data.menu_price}</td>
												</tr>
											);
										})
									) : (
										<tr>
											<td colSpan={4}>No item in cart</td>
										</tr>
									)}
								</tbody>
							</Table>

							<Card.Footer>
								<Nav.Link href="/checkout" className="float-left">
									<Button variant="secondary" size="sm">
										Continue Shoping
									</Button>
								</Nav.Link>

								<Nav.Link href="/cart" className="float-right">
									<Button variant="success" size="sm">
										View Cart
									</Button>
								</Nav.Link>
							</Card.Footer>
						</Card>
					</Col>

					<Col sm={7}>
						<Card>
							<Card.Header>Confirm Order</Card.Header>

							<Card.Body>
								<Form onSubmit={(event) => this.confirmOrder(event)}>
									<Form.Group controlId="formBasicPassword">
										<Form.Label>Enter delivery address</Form.Label>
										<Form.Control
											type="text"
											name="address"
											placeholder="Enter address"
										/>
										<AlertInput alert={this.props.alert} name="address" />
									</Form.Group>

									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											name="email"
											placeholder="Enter email"
										/>
										<AlertInput alert={this.props.alert} name="email" />
										<Form.Text className="text-muted">
											You will use this to view your order(s)
										</Form.Text>
									</Form.Group>

									<Button variant="primary" type="submit">
										Complete order
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return { alert: state.alert, cart: state.cart };
};

const mapActionToProps = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapActionToProps)(Checkout);
