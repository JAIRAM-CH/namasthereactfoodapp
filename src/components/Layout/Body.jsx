import React from "react";
import Layout from "./Layout";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

const Body = ({ Component }) => {
  const location = useLocation();
  const Component = withAuthenticationRequired(Component, {
    returnTo: `/callback?returnUrl=${location.pathname}`,
    onRedirecting: () => {
      <div class="spinner-border text-info" role="status">
        <span class="sr-only">Redirecting to Login Page..</span>
      </div>;
    },
  });

  return (
    <Layout>
      <main className="main-content">
        <Component />
      </main>
    </Layout>
  );
};

export default Body;
