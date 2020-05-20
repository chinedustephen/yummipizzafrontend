import * as actionTypes from "redux/actions/actionTypes";

const initalState = {
	show: false,
	status: null,
	message: null,
	body: null,
};

export default function alert(state = initalState, action) {
	switch (action.type) {
		case actionTypes.ALERT:
			return Object.assign({}, state, {
				show: action.payload.show,
				status: action.payload.status,
				message: action.payload.message,
				body: action.payload.body,
			});
		default:
			return state;
	}
}
