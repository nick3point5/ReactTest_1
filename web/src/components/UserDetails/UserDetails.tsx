import React, { useEffect } from "react";
import "./userDetails.css";
import { UserData } from "../../types/types";
import paw from "../../assets/Paw_Print.svg";

function UserDetails(props: UserData) {
  const userData = props.userData;
  const pawElement = <img src={paw} alt="" style={{ height: 50 }} />;
  let paws;
  if (userData.number_of_pets < 100) {
    paws = Array(userData.number_of_pets).fill(pawElement);
  } else {
    paws = Array(100).fill(pawElement);
  }

  useEffect(() => {
    document.body.style.backgroundColor = userData.favorite_color;
    return () => {
      document.body.style.backgroundColor = "lightskyblue";
    };
  }, [userData]);

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
        {paws}
        <div>{userData.id}</div>
      </div>
    </div>
  );
}

export default UserDetails;
