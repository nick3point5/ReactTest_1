import { message } from 'antd'
import React from 'react'

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
