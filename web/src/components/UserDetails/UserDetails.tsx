import React from 'react'
import { Link } from 'react-router-dom';
import ErrorMessageComponent from '../ErrorMessageComponent/ErrorMessageComponent';


function UserDetails(props:any) {
	const userData = props.userData
	return (
		<div className="">
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

export default UserDetails
