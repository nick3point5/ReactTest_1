import React, {useEffect} from 'react'
import './userDetails.css'
import { Link } from 'react-router-dom';
interface User {
	"id": string,
	"first_name": string,
	"last_name": string,
	"email": string,
	"favorite_color": string,
	"number_of_pets":  number
}
interface UserData {
	"userData": User,
}

function UserDetails(props:UserData) {
	const userData = props.userData

	useEffect(() => {
		document.body.style.backgroundColor = userData.favorite_color
		return () => {
		document.body.style.backgroundColor = 'lightskyblue'	 }
	}, [userData])

	return (
		<div className="card">
			<div className="card-body">
				<h1>{userData.last_name}, {userData.first_name}</h1>
				<h4>
					{userData.email}
				</h4>

				<h5>
					Favorite Color: {userData.favorite_color}
				</h5>
				<h5>
					{
						(userData.number_of_pets !== 1) 
							? `${userData.number_of_pets} pets`
							: `${userData.number_of_pets} pet`
					}
				</h5>
				<div>
					{userData.id}
				</div>
			</div>
		</div>
	)
}

export default UserDetails
