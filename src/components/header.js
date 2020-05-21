import React, { Component } from "react";
import {
	Navbar,
	Nav,
	Badge,
	Overlay,
	Popover,
	Table,
	Button,
	NavDropdown,
} from "react-bootstrap";
import { connect } from "react-redux";
import { currencyAmount } from "modules/currency";
import cartTotal from "modules/cartTotalPrice";
import { setCurrency } from "modules/currency";

class header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			setShow: 0,
			target: null,
			setTarget: null,
			ref: null,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	initiateCurrency(iso) {
		setCurrency(iso);
		window.location.reload();
	}

	handleClick(event) {
		let show = this.state.show ? false : true;
		this.setState({ show: show });
		this.setState({ target: event.target });
	}

	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/">
						<img
							alt=""
							src="/logo.jpg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						Yummi Pizza
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto"></Nav>
						<NavDropdown title="Currency" id="basic-nav-dropdown">
							<NavDropdown.Item
								onClick={() => this.initiateCurrency("eur")}
								href="#"
							>
								EUR
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item
								onClick={() => this.initiateCurrency("usd")}
								href="#"
							>
								USD
							</NavDropdown.Item>
						</NavDropdown>
						<Nav>
							<Nav.Link href="#" onClick={this.handleClick}>
								Cart{" "}
								<Badge variant="light">{this.props.cart.cart.length}</Badge>
							</Nav.Link>
							<Overlay
								show={this.state.show}
								target={this.state.target}
								placement="bottom"
								container={this.state.ref}
								containerPadding={20}
							>
								<Popover id="popover-contained">
									<Popover.Title as="h3">Cart</Popover.Title>
									<Popover.Content>
										<Table striped hover size="lg">
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
																<td>{currencyAmount(data.menu_price)}</td>
																<td>
																	{currencyAmount(
																		data.cart_quantity * data.menu_price
																	)}
																</td>
															</tr>
														);
													})
												) : (
													<tr></tr>
												)}

												{this.props.cart.cart.length > 0 ? (
													<tr>
														<td colSpan={3}>Total</td>
														<td>{cartTotal(this.props.cart.cart)}</td>
													</tr>
												) : (
													<tr></tr>
												)}
											</tbody>
										</Table>

										{this.props.cart.cart.length > 0 ? (
											<>
												<Nav.Link href="/cart" className="float-left">
													<Button variant="secondary" size="sm">
														View Cart
													</Button>
												</Nav.Link>
												<Nav.Link href="/checkout" className="float-right">
													<Button variant="success" size="sm">
														Checkout
													</Button>
												</Nav.Link>
											</>
										) : (
											""
										)}
									</Popover.Content>
								</Popover>
							</Overlay>
							<Nav.Link></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps)(header);
