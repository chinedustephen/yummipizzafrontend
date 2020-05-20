import { combineReducers } from "redux";
import alert from "redux/reducers/alert";
import cart from "redux/reducers/cart";

export default combineReducers({
	alert: alert,
	cart: cart,
});
