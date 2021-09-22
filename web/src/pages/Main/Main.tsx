import React from 'react'
import { withRouter } from "react-router";
import UserComponent from '../../components/UserComponent/UserComponent'
import ErrorMessageComponent from '../../components/ErrorMessageComponent/ErrorMessageComponent';
import {useFetchAll} from '../../API/fetchRequests';

function Main() {
	const [data, error] = useFetchAll([]) 

	if(!!error){
		return <ErrorMessageComponent message = {error}/>
	}

	return (
		<div>
			<UserComponent  userDataAll = {data}/>
		</div>
	)
}

export default withRouter(Main)
