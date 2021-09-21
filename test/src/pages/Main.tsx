import React,{useEffect, useState} from 'react'
import { withRouter } from "react-router";
import UserComponent from '../components/UserComponent'


function Main() {
	const [ userDataAll, setUserDataAll ] = useState([])

	function fetchDataAll() {
		fetch(`http://localhost:8081/api/users/`, {
			method: 'GET'
		})
		.then(res => {
				return res.json()
		})
		.then(res => {
			setUserDataAll(res)
		})
	}

	useEffect(() => {
		fetchDataAll()
	}, [])

	return (
		<div>
			<UserComponent  userData = {userDataAll}/>
		</div>
	)
}

export default withRouter(Main)
