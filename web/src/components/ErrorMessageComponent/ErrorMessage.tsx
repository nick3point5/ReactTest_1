import React from "react";
import "./errorMessage.css";
import { Message } from "../../types/types";

function ErrorMessage({ message }: Message) {
	return (
		<div className="alert alert-danger" role="alert">
			{message}
		</div>
	);
}

export default ErrorMessage;