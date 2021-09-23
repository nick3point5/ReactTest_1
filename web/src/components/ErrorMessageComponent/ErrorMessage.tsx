import React from "react";
import "./errorMessage.css";

interface Message {
  message: string;
}

function ErrorMessage(props: Message) {
  const message = props.message;
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
}

export default ErrorMessage;