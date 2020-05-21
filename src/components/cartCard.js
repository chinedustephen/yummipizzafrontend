import React from "react";
import { Card, Button } from "react-bootstrap";

function cartCard(props) {
	return (
		<Card className="shadowed-card product-card">
			<Card.Body>
				<div className="horizontal-card">
					<div className="horizontal-card-img">
						<Card.Img src={props.data.menu_image} />
					</div>

					<div className="horizontal-card-body">
						<Card.Title>{props.data.menu_name}</Card.Title>
						<Card.Text>{props.data.menu_description}</Card.Text>
						<Card.Text>
							<span>Unit price: </span>
							{props.data.menu_price}
						</Card.Text>
						<Card.Text>
							<span>Quantity: </span>
							{props.data.cart_quantity}
						</Card.Text>
						<Card.Text>
							<span>Total price: </span>
							{props.data.cart_quantity * props.data.menu_price}
						</Card.Text>

						<div>
							<Button
								variant="danger"
								size="sm"
								onClick={() => props.deleteCart(props.data.cart_id)}
							>
								Remove
							</Button>

							<span>
								<form
									className="cart-quantity"
									onSubmit={(event) =>
										props.updateCart(event, props.data.cart_id)
									}
								>
									<input type="number" name="quantity" placeholder="Quantity" />
									<Button variant="success" size="sm" type="submit">
										Update
									</Button>
								</form>
							</span>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default cartCard;
