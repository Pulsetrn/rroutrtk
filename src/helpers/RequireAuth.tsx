import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("user");
  if (!token) {
    return <Navigate to="/login?message=you must log in first"></Navigate>;
  } else {
    return <div>{children}</div>;
  }
}

export default RequireAuth;
