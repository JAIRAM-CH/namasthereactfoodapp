import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

  console.log("domain", domain);
  console.log("clientID", clientId);

  const onRedirectCallback = (appState) => {
    if (appState) {
      navigate(appState.returnTo || "/callback?returnUrl=/");
    } else {
      console.error("appState is undefined in onRedirectCallback");
    }
  };

  console.log(`${clientId}${domain} are found!`);

  if (!(domain && clientId)) {
    return null;
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="local storage"
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthenticationProvider;
