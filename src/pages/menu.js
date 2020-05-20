import React, { Component } from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import img1 from "assets/images/img1.png";
import img2 from "assets/images/img2.jpeg";
import img3 from "assets/images/img3.jpeg";

class Menu extends Component {
	render() {
		return (
			<Container className="container-body">
				<Row>
					<Col sm={4}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={img1} className="menu-image" />
							<Card.Body>
								<Card.Title>Asun</Card.Title>
								<Card.Text>usd 50</Card.Text>
								<Button variant="primary">Add to cart</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col sm={4}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={img2} className="menu-image" />
							<Card.Body>
								<Card.Title>Peppered chicken</Card.Title>
								<Card.Text>200</Card.Text>
								<Button variant="primary">Add to cart</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col sm={4}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={img3} className="menu-image" />
							<Card.Body>
								<Card.Title>Ofa soup</Card.Title>
								<Card.Text>1000</Card.Text>
								<Button variant="primary">Add to cart</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Menu;
