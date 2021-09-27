import React, { useMemo } from "react";
import "./main.css";
import { withRouter } from "react-router";
import { useFetchAll } from "../../API/fetchRequests";
import UserTable from "../../components/UserTableComponent/UserTable";
import ErrorMessage from "../../components/ErrorMessageComponent/ErrorMessage";
import Loading from "../../components/LoadingComponent/Loading";

function Main() {
	const [userDataAll, error, loading] = useFetchAll();

	return (
		<div className="content center">
			{loading && <Loading />}
			{!!error && <ErrorMessage message={error} />}
			{!loading && !error && <UserTable userDataAll={userDataAll} />}
		</div>
	);
}

export default withRouter(Main);
