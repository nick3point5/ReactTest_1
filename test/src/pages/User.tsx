import React,{useEffect, useState} from 'react'
import { withRouter, useParams } from "react-router";
import { Link } from 'react-router-dom';
import userApiUrl from "../routes/userAPI";

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

	return (
		<div>
			<div>
				id : {userData.id}
			</div>
			<div>
			email : {userData.email}
			</div>
			<div>
			first name : {userData.first_name}
			</div>
			<div>
			last name : {userData.last_name}
			</div>
			<div>
			favorite color : {userData.favorite_color}
			</div>
			<div>
			number of pets : {userData.number_of_pets}
			</div>

			<Link to={{ pathname: `/users`}} title="">
						home
			</Link>
		</div>
	)
}

export default withRouter(User)
