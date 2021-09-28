import React, { useEffect, useContext } from "react";
import "./userDetails.css";
import { UserData } from "../../types/types";
import paw from "../../assets/Paw_Print.svg";
import { colorContext } from "../../App";

function UserDetails({ userData }: UserData) {
	const setColor = useContext(colorContext)
	
	useEffect(() => {
		setColor(userData.favorite_color)
		return () => {
			setColor("lightskyblue")
		};
	}, [setColor,userData]);

	return (
		<div className="card">
			<div className="card-body">
				<h1>
					{userData.last_name}, {userData.first_name}
				</h1>
				<h4>{userData.email}</h4>

				<h5>Favorite Color: {userData.favorite_color}</h5>
				<h5>
					{userData.number_of_pets !== 1
						? `${userData.number_of_pets} pets`
						: `${userData.number_of_pets} pet`}
				</h5>
				{userData.number_of_pets < 100
					? Array(userData.number_of_pets).fill(
							<img src={paw} alt="" style={{ height: 50 }} />
					  )
					: Array(100).fill(<img src={paw} alt="" style={{ height: 50 }} />)}
				<div>{userData.id}</div>
			</div>
		</div>
	);
}

export default UserDetails;
