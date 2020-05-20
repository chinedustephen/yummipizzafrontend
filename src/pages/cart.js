import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import img1 from "assets/images/img1.png";

class Cart extends Component {
	render() {
		return (
			<Container className="container-body">
				<Row style={{ marginBottom: "20px" }}>
					<Col>
						<Card>
							<Card.Header>Cart</Card.Header>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card>
							<Card.Body>
								<Row>
									<Col>
										<Card.Img src={img1} />
									</Col>

									<Col>
										<Card.Title>Name</Card.Title>
										<Card.Text>Description</Card.Text>
										<Card.Text>200</Card.Text>
										<Button variant="danger">Remove</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Cart;
