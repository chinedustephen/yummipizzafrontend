import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function header() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="/logo.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					Yummi Pizza
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav>
						<Nav.Link href="/cart">Cart</Nav.Link>
						<Nav.Link href="/checkout">Checkout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default header;
