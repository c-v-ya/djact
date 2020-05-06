import React from "react";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Sign Up page</h1>
      <button onClick={handleClick}>sign up</button>
    </div>
  );
};

export default SignUpPage;
