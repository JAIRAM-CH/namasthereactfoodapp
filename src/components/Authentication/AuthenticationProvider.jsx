import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = (appState) => {
    if (appState) {
      navigate(appState.returnTo);
    } else {
      console.error("appState is undefined in onRedirectCallback");
    }
  };

  if (!(domain && clientId)) {
    return null;
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://BigFoody-api/",
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      useRefreshTokensFallback
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthenticationProvider;
