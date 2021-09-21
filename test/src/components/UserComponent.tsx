import React from 'react'

function UserComponent(props:any) {
	function mapUsers(users:any) {
		const map = users.map((user:any) => {
			return (
				<tr>
					<th>{user.email}</th>
					<th>{user.first_name}</th>
					<th>{user.last_name}</th>
				</tr>
			)
		})
		return (
			<table>
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
		<div>
			{mapUsers(props.userData)}
		</div>
	)
}

export default UserComponent
