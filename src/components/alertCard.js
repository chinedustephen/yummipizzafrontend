import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "redux/actions/index";
import { Alert } from "react-bootstrap";

class AlertCard extends Component {
	constructor(props) {
		super(props);
		this.dismissAlert = this.dismissAlert.bind(this);
	}

	dismissAlert() {
		this.props.actions.alert({ show: false });
	}

	render() {
		if (this.props.alert.show) {
			return (
				<Alert
					variant={this.props.alert.status === "success" ? "success" : "danger"}
					onClose={() => this.dismissAlert(false)}
					dismissible
				>
					{/* <Alert.Heading>
						{this.props.alert.status === "success" ? "Success" : "Failed"}
					</Alert.Heading> */}
					<p>{this.props.alert.message}</p>
				</Alert>
			);
		} else {
			return "";
		}
	}
}

const matchStateToProps = (state) => {
	return { alert: state.alert };
};

const matchActionsToProps = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(matchStateToProps, matchActionsToProps)(AlertCard);
