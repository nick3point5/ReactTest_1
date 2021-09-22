import React from 'react'
import './user.css'
import { withRouter, useParams } from "react-router";
import {useFetchUser} from '../../API/fetchRequests';
import UserDetails from '../../components/UserDetails/UserDetails';
import ErrorMessage from '../../components/ErrorMessageComponent/ErrorMessage';
import Loading from '../../components/LoadingComponent/Loading';

interface Params {
	id: string;
}

function User() {
	const params:Params = useParams()
	const [userData, error, loading] = useFetchUser(params.id)
	let render

	if(!!error){
		render = <ErrorMessage message = {error}/>
	} else if (loading) {
		render = <Loading/>
	} else {
		render = <UserDetails userData = {userData}/>
	}

	return (
		<div className = 'content center'>
			{render}
		</div>
	)
}


export default withRouter(User)