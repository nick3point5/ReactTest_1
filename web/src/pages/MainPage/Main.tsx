import React, { useMemo } from "react";
import "./main.css";
import { withRouter } from "react-router";
import { useFetchAll } from "../../API/fetchRequests";
import UserTable from "../../components/UserTableComponent/UserTable";
import ErrorMessage from "../../components/ErrorMessageComponent/ErrorMessage";
import Loading from "../../components/LoadingComponent/Loading";

function Main() {
	const [userDataAll, error, loading] = useFetchAll();
	const jsx = useMemo(() => {
		if (loading) return <Loading />;
		if (!!error) return <ErrorMessage message={error} />;
		return <UserTable userDataAll={userDataAll} />;
	}, [loading]);

	return <div className="content center">{jsx}</div>;
}

export default withRouter(Main);
