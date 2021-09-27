import React, { useMemo, useState } from "react";
import "./user.css";
import { Params } from "../../types/types";
import { withRouter, useParams } from "react-router";
import { useFetchUser } from "../../API/fetchRequests";
import UserDetails from "../../components/UserDetails/UserDetails";
import ErrorMessage from "../../components/ErrorMessageComponent/ErrorMessage";
import Loading from "../../components/LoadingComponent/Loading";

function User() {
	const params: Params = useParams();
	const [userData, error, loading] = useFetchUser(params.id);

	if (loading) return <Loading />;
	if (!!error) return <ErrorMessage message={error} />; 

	return (
		<div className="content center">
			{loading && <Loading />}
			{!!error && <ErrorMessage message={error} />}
			{!loading && !error && <UserDetails userData={userData}/>}
		</div>
	)
}

export default withRouter(User);
