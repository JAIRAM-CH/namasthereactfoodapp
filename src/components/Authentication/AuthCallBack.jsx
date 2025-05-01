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
    <div class="spinner-border text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default AuthCallBack;
