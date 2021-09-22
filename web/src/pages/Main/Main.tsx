import React,{useEffect, useState} from 'react'
import { withRouter } from "react-router";
import UserComponent from '../../components/UserComponent/UserComponent'
import userApiUrl from "../../routes/userAPI";
import ErrorMessageComponent from '../../components/ErrorMessageComponent/ErrorMessageComponent';

function Main() {
	const [ userDataAll, setUserDataAll ] = useState([])
	const [ errorMessage, setErrorMessage ] = useState()

	function fetchDataAll() {
		fetch(`${userApiUrl}`, {
			method: 'GET'
		})
		.then(res => {
				return res.json()
		})
		.then(res => {
			setUserDataAll(res)
		})
		.catch(error =>{
			console.log(error)
			setErrorMessage(error.toString())
		})
	}

	useEffect(() => {
		fetchDataAll()
	}, [])

	if(!!errorMessage) return <ErrorMessageComponent message = {errorMessage}/>

	return (
		<div>
			<UserComponent  userDataAll = {userDataAll}/>
		</div>
	)
}

export default withRouter(Main)
