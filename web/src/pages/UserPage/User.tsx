import React, { useMemo } from "react";
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
	const jsx = useMemo(() => {
		if (loading) return <Loading />;
		if (!!error) return <ErrorMessage message={error} />;
		return <UserDetails userData={userData} />;
	}, [loading]);

	return <div className="content center">{jsx}</div>;
}

export default withRouter(User);
