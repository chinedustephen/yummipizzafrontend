import { currencyRate, currencySymbol } from "modules/currency";

export default function cartTotal(cart) {
	return (
		currencySymbol +
		cart.reduce(
			(totalAmount, data) =>
				totalAmount +
				parseInt(currencyRate * data.cart_quantity * data.menu_price, 10),
			0
		)
	);
}
