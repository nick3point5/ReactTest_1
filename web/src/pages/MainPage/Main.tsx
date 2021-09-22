import React from 'react'
import { withRouter } from "react-router";
import {useFetchAll} from '../../API/fetchRequests';
import UserTable from '../../components/UserComponent/UserTable'
import ErrorMessage from '../../components/ErrorMessageComponent/ErrorMessage';
import Loading from '../../components/LoadingComponent/Loading';


function Main() {
	const [userDataAll, error, loading] = useFetchAll() 
	let render

	if(!!error){
		render = <ErrorMessage message = {error}/>
	} else if (loading) {
		render = <Loading/>
	} else {
		render = <UserTable  userDataAll = {userDataAll}/>
	}

	return (
		<div className = 'content center'>
			{render}
		</div>
	)
}

export default withRouter(Main)
