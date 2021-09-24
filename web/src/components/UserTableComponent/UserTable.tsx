import React from "react";
import "./userTable.css";
import { Link } from "react-router-dom";
import { UserDataAll, User } from "../../types/types";

function UserTable({ userDataAll }: UserDataAll) {
	function mapUsers(users: User[]) {
		const map = users.map((user: User) => {
			return (
				<tr>
					<th>
						<Link to={{ pathname: `/users/${user.id}` }} title="">
							{user.email}
						</Link>
					</th>
					<th>{user.first_name}</th>
					<th>{user.last_name}</th>
				</tr>
			);
		});
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Email</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
					</tr>
				</thead>
				<tbody>{map}</tbody>
			</table>
		);
	}

	return <div className={"table-container"+(userDataAll.length > 10?" overflow-scroll":"")}>{mapUsers(userDataAll)}</div>;
}

export default UserTable;
