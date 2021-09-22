import React from 'react'
import { withRouter, useParams } from "react-router";
import UserDetails from '../../components/UserDetails/UserDetails';
import ErrorMessageComponent from '../../components/ErrorMessageComponent/ErrorMessageComponent';
import {useFetchUser} from '../../API/fetchRequests';

interface Params {
	id: string;
}

const defaultUser ={
	"id": "",
	"first_name": "",
	"last_name": "",
	"email": "",
	"favorite_color": "",
	"number_of_pets": 0
}

function User() {
	const params:Params = useParams()
	const [data, error] = useFetchUser(defaultUser,params.id)
	if(!!error) return <ErrorMessageComponent message = {error}/>

	return (
		<div className="">
			<UserDetails userData = {data}/>
		</div>
	)
}

export default withRouter(User)
