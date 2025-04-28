import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const Navigate = useNavigate();
  const onNavigateHome = () => {
    Navigate("/");
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3>Oops! 404- Page Not Found</h3>
      <button onClick={onNavigateHome} type="button">
        Back to Home Page
      </button>
    </div>
  );
}

export default NotFoundPage;
