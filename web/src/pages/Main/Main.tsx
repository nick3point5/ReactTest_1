import React,{useEffect, useState} from 'react'
import { withRouter } from "react-router";
import UserComponent from '../../components/UserComponent/UserComponent'

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
			<UserComponent  userDataAll = {userDataAll}/>
		</div>
	)
}

export default withRouter(Main)
