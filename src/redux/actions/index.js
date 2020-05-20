import * as actionTypes from "./actionTypes";

export function alert(data) {
	return { type: actionTypes.ALERT, payload: data };
}

export function cart(data) {
	return { type: actionTypes.CART, payload: data };
}
