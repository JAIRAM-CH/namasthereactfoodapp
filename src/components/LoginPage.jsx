import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoggedin, setIsLogedin] = useState(false);

  return (
    <div>
      <form>
        <label htmlFor="username"></label>
        <input type="text" name="username" id="" />
        <label htmlFor="password"></label>
        <input type="password" name="password" id="" />
        <button type="submit" onSubmit={() => setIsLogedin(true)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
