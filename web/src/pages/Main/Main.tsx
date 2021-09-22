import React from 'react'
import { withRouter } from "react-router";
import {useFetchAll} from '../../API/fetchRequests';
import UserComponent from '../../components/UserComponent/UserComponent'
import ErrorMessageComponent from '../../components/ErrorMessageComponent/ErrorMessageComponent';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';


function Main() {
	const [userDataAll, error, loading] = useFetchAll() 

	if(!!error){
		return <ErrorMessageComponent message = {error}/>
	}

	if (loading) {
		return <LoadingComponent/>
	}

	return (
		<div>
			<UserComponent  userDataAll = {userDataAll}/>
		</div>
	)
}

export default withRouter(Main)
