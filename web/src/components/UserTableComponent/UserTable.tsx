import React from 'react'
import './userTable.css'
import { Link } from 'react-router-dom';

interface UserDataAll {
	"userDataAll": User[],
}

interface User {
		"id": string,
		"first_name": string,
		"last_name": string,
		"email": string,
		"favorite_color": string,
		"number_of_pets":  number
}


function UserTable(props:UserDataAll) {
	console.log(props.userDataAll)
	function mapUsers(users:User[]) {
		const map = users.map((user:User) => {
			return (
				<tr>
					<th>
					<Link to={{ pathname: `/users/${user.id}`}} title="">
						{user.email}
					</Link>
					</th>
					<th>{user.first_name}</th>
					<th>{user.last_name}</th>
				</tr>
			)
		})
		return (
			<table className = 'table table-striped'>
				<thead>
					<tr>
						<th scope="col">Email</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
					</tr>
				</thead>
				<tbody>
				{map}
				</tbody>
			</table>
		)
	}

	if(props.userDataAll.length > 10) {
		document.querySelector('.table-container')?.classList.add("overflow-scroll")
	}

	return (
		<div className = 'table-container'>
			{mapUsers(props.userDataAll)}
		</div>
	)
}

export default UserTable
