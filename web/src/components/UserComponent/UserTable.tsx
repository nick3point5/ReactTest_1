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
			<table className = 'table'>
				<tr>
					<th>Email</th>
					<th>First Name</th>
					<th>Last Name</th>
				</tr>
				{map}
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
