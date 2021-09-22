import React from 'react'
import { Link } from 'react-router-dom';

function UserTable(props:any) {
	function mapUsers(users:any) {
		const map = users.map((user:any) => {
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
	
	return (
		<div className = 'table-container'>
			{mapUsers(props.userDataAll)}
		</div>
	)
}

export default UserTable
