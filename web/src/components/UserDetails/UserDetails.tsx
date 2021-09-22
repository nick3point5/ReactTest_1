import React, {useEffect} from 'react'
import './userDetails.css'
import { Link } from 'react-router-dom';

function UserDetails(props:any) {
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

				<div>
					favorite color : {userData.favorite_color}
				</div>
				<div>
					{
						(userData.number_of_pets !== 1) 
							? `${userData.number_of_pets} pets`
							: `${userData.number_of_pets} pet`
					}
				</div>
				<div>
					{userData.id}
				</div>
			</div>
		</div>
	)
}

export default UserDetails
