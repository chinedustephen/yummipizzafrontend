import * as actionTypes from "redux/actions/actionTypes";

const initalState = {
	cart: [],
};

export default function createContract(state = initalState, action) {
	switch (action.type) {
		case actionTypes.CART:
			return Object.assign({}, state, { cart: action.payload.cart });
		default:
			return state;
	}
}
