import React,{useEffect, useState} from 'react'
import { withRouter, useParams } from "react-router";

interface Params {
	id: string;
}

function User() {
	const [userData, setUserData] = useState()
	const params:Params = useParams()

	function fetchDataUser() {
		fetch(`http://localhost:8081/api/users/${params.id}`, {
			method: 'GET'
		})
		.then(res => {
				return res.json()
		})
		.then(res => {
			setUserData(res)
		})
	}
	console.log(userData)
	useEffect(() => {
		fetchDataUser()
	}, [])

	return (
		<div>
			{/* {userData} */}
		</div>
	)
}

export default withRouter(User)
