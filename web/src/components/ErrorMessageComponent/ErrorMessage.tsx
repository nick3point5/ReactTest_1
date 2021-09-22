import React from 'react'
import './errorMessage.css'

interface Message {
	message: string;
}

function ErrorMessage(props:Message) {
	const message = props.message
	return (
		<div>
			{message}
		</div>
	)
}

export default ErrorMessage
