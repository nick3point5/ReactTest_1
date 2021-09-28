import React from "react";
import "./loading.css";
import loadingSpinner from "../../assets/Spinner-1s-200px.svg";

function Loading() {
  return (
      <img src={loadingSpinner} alt="Loading" />
  );
}

export default Loading;
