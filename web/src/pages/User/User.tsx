import React,{useEffect, useState} from 'react'
import { withRouter, useParams } from "react-router";
import UserDetails from '../../components/UserDetails/UserDetails';
import userApiUrl from "../../routes/userAPI";
import ErrorMessageComponent from '../../components/ErrorMessageComponent/ErrorMessageComponent';


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
	const [userData, setUserData] = useState(defaultUser)
	const [ errorMessage, setErrorMessage ] = useState()
	const params:Params = useParams()

	function fetchDataUser() {
		fetch(`${userApiUrl}${params.id}`, {
			method: 'GET'
		})
		.then(res => {
				return res.json()
		})
		.then(res => {
			setUserData({...userData,...res})
		})
	}
	console.log(userData)
	useEffect(() => {
		fetchDataUser()
		return () => {
			
		}
	}, [])

	if(!!errorMessage) return <ErrorMessageComponent message = {errorMessage}/>


	return (
		<div className="">
			<UserDetails userData = {userData}/>
		</div>
	)
}

export default withRouter(User)
