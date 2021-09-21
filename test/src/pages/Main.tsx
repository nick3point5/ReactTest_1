import React,{useEffect, useState} from 'react'
import UserComponent from '../components/UserComponent'


function Main() {
	const [ userData, setUserData ] = useState([])

	function fetchData() {
		fetch(`http://localhost:8081/api/users/`, {
			method: 'GET'
		})
		.then(res => {
				return res.json()
		})
		.then(res => {
			setUserData(res)
		})
	}

	useEffect(() => {
		fetchData()
		return () => {
			
		}
	}, [])

	return (
		<div>
			<UserComponent  userData = {userData}/>
		</div>
	)
}

export default Main
