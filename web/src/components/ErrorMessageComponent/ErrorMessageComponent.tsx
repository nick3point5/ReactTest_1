import { message } from 'antd'
import React from 'react'

interface Message {
	message: string;
}

function ErrorMessageComponent(props:any) {
	const message = props.message
	return (
		<div>
			{message}
		</div>
	)
}

export default ErrorMessageComponent
