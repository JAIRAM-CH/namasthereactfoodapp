import React, { useEffect, useState } from "react";
import TopMenu from "./TopMenu";
import { useAuth0 } from "@auth0/auth0-react";
const Layout = ({ children }) => {
  const {
    isLoading,
    getAccessTokenSilently,
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
      } catch (e) {
        console.error("Token fetch error:", e.error);
      }
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    !isLoading && (
      <div className="layout">
        <TopMenu />
        {children}
      </div>
    )
  );
};

export default Layout;
