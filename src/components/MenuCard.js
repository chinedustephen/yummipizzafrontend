import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { currencyAmount } from "modules/currency";

function MenuCard(props) {
	return (
		<Col sm={4}>
			<Card className="menu-card">
				<Card.Img
					variant="top"
					src={props.data.menu_image}
					className="menu-image"
				/>
				<Card.Body>
					<Card.Title>{props.data.menu_name}</Card.Title>
					<Card.Text>{currencyAmount(props.data.menu_price)}</Card.Text>
					<Button
						variant="primary"
						onClick={() => props.addToCart(props.data.menu_id)}
					>
						Add to cart
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default MenuCard;
