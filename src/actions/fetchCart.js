import { getQuery } from "modules/query";
import apiUrl from "modules/endpoint";

function fetchCart(cartAction) {
	getQuery(`${apiUrl}cart`)
		.then((data) => {
			cartAction(data.body);
		})
		.catch((error) => {});
}

export default fetchCart;
