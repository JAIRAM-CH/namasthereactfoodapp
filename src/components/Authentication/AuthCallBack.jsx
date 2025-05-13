import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AuthCallBack = () => {
  const { isLoading } = useAuth0();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");

  if (!isLoading && returnUrl != null) {
    return <Navigate to={returnUrl} />;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-warning" role="status"></div>
    </div>
  );
};

export default AuthCallBack;
