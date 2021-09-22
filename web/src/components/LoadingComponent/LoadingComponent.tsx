import React from 'react'
import loadingSpinner from '../../assets/Spinner-1s-200px.svg'

function LoadingComponent() {
	return (
		<div>
			<img src={loadingSpinner} alt='Loading'/>
		</div>
	)
}

export default LoadingComponent
