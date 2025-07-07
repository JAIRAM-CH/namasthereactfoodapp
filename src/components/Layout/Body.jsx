import Layout from "./Layout";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

const Body = ({ component }) => {
  const location = useLocation();
  const Component = withAuthenticationRequired(component, {
    returnTo: `/callback?returnUrl=${location.pathname}`,
    onRedirecting: () => (
      <div
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{ width: "3rem", height: "3rem" }}
          className="spinner-border text-info sr-only"
          role="status"
        >
          ..
        </div>
      </div>
    ),
  });

  return (
    <Layout>
      <main className="">
        <Component />
      </main>
    </Layout>
  );
};

export default Body;
