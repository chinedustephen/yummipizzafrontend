import React from "react";
import { Form } from "react-bootstrap";

function alertInput(props) {
	return props.alert.body ? (
		props.alert.body[props.name] ? (
			<Form.Text className="text-danger">
				{props.alert.body[props.name][0]}
			</Form.Text>
		) : (
			""
		)
	) : (
		""
	);
}

export default alertInput;
