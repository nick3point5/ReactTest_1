import React from 'react'
import { withRouter, useParams } from "react-router";
import {useFetchUser} from '../../API/fetchRequests';
import UserDetails from '../../components/UserDetails/UserDetails';
import ErrorMessageComponent from '../../components/ErrorMessageComponent/ErrorMessageComponent';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';

interface Params {
	id: string;
}

function User() {
	const params:Params = useParams()
	const [userData, error, loading] = useFetchUser(params.id)
	
	if(!!error) return <ErrorMessageComponent message = {error}/>

	if (loading) {
		return <LoadingComponent/>
	}

	return (
		<div className="">
			<UserDetails userData = {userData}/>
		</div>
	)
}

export default withRouter(User)
